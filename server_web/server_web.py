import socket
import os

serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serversocket.bind(('', 5678))
serversocket.listen(5)

while True:
    print('#########################################################################')
    print('Serverul asculta potentiali clienti.')
    
    (clientsocket, address) = serversocket.accept()
    print('S-a conectat un client.')
    
    cerere = ''
    linieDeStart = ''
    
    while True:
        data = clientsocket.recv(1024)
        cerere = cerere + data.decode()
        print('S-a citit mesajul: \n---------------------------\n' + cerere + '\n---------------------------')
        pozitie = cerere.find('\r\n')
        
        if pozitie > -1:
            linieDeStart = cerere[0:pozitie]
            print('S-a citit linia de start din cerere: ##### ' + linieDeStart + '#####')
            break
        print('S-a terminat cititrea.')
        
    if linieDeStart == '':
        clientsocket.close()
        print('S-a terminat comunicarea cu clientul - nu s-a primit niciun mesaj.')
        continue
    
    elementeLineDeStart = linieDeStart.split()
    numeResursaCeruta = elementeLineDeStart[1]
    
    if numeResursaCeruta == '/':
        numeResursaCeruta = '/index.html'

    numeFisier = 'D:\\Facultate\\PW\\proiect-1-AlexandruGeorgianBahnaru1\\continut' + numeResursaCeruta
    print(numeFisier)
    
    fisier = None
    try:
        fisier = open(numeFisier, 'rb')
        numeExtensie = numeFisier[numeFisier.rfind('.') + 1:]
        tipuriMedia = {
            'html': 'text/html; charset=utf-8',
            'css': 'text/css; charset=utf-8',
            'js': 'text/javascript; charset=utf-8',
            'png': 'image/png',
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'gif': 'image/gif',
            'ico': 'image/x-icon',
            'xml': 'application/xml; charset=utf-8',
            'json': 'application/json; charset=utf-8'
        }
        tipMedia = tipuriMedia.get(numeExtensie, 'text/plain; charset=utf-8')

        clientsocket.sendall('HTTP/1.1 200 OK\r\n'.encode())
        clientsocket.sendall(('Content-Length: ' + str(os.stat(numeFisier).st_size) + '\r\n').encode())
        clientsocket.sendall(('Content-Type: ' + tipMedia + '\r\n').encode())
        clientsocket.sendall('Server: guitar\r\n'.encode())
        clientsocket.sendall('\r\n'.encode())

        buf = fisier.read(1024)
        while buf:
            clientsocket.send(buf)
            buf = fisier.read(1024)
    except IOError:
        msg = 'Eroare! Resursa ceruta ' + numeResursaCeruta + ' nu a putut fi gasita!'
        print(msg)
        clientsocket.sendall('HTTP/1.1 404 Not Found\r\n'.encode())
        clientsocket.sendall(('Content-Length: ' + str(len(msg.encode('utf-8'))) + '\r\n').encode())
        clientsocket.sendall('Content-Type: text/plain; charset=utf-8\r\n'.encode())
        clientsocket.sendall('Server: My PW Server\r\n'.encode())
        clientsocket.sendall('\r\n'.encode())
        clientsocket.sendall(msg.encode())
    finally:
        if fisier is not None:
            fisier.close()
    clientsocket.close()
    print('S-a terminat comunicarea cu clientul.')