import socket
# creeaza un server socket
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# specifica ca serverul va rula pe portul 5678, accesibil de pe orice ip al serverului
serversocket.bind(('', 5678))
# serverul poate accepta conexiuni; specifica cati clienti pot astepta la coada
serversocket.listen(5)

while True:
 print ('#########################################################################')
 print ('Serverul asculta potentiali clienti.')
 # asteapta conectarea unui client la server
 # metoda `accept` este blocanta => clientsocket, care reprezinta socket-ul corespunzator clientului conectat
 (clientsocket, address) = serversocket.accept()
 print ('S-a conectat un client.')
 # se proceseaza cererea si se citeste prima linie de text
 cerere = ''
 linieDeStart = ''
 while True:
    data = clientsocket.recv(1024)
    cerere = cerere + data.decode()
    print ('S-a citit mesajul: \n---------------------------\n' + cerere + '\n---------------------------')
    pozitie = cerere.find('\r\n')
    if (pozitie > -1):
        linieDeStart = cerere[0:pozitie]
        print ('S-a citit linia de start din cerere: ##### ' + linieDeStart + '#####')
        break
    print ('S-a terminat cititrea.')
 # TODO interpretarea sirului de caractere `linieDeStart` pentru a extrage numele resursei cerute
    stringSplited = linieDeStart.split('/')
    stringSplited2 = stringSplited[1].split(' ')
 # TODO trimiterea răspunsului HTTP
    #response_proto = 'HTTP/1.1'
    #response_status = '200'
    #response_status_text = stringSplited[0] # this can be random
        
        # sending all this stuff
    #clientsocket.send('%s %s %s' % (response_proto, response_status, response_status_text))
    html_file  = "D:\Facultate\PW\proiect-1-AlexandruGeorgianBahnaru1\continut" + "\\" + stringSplited2[0]
    response = ''
    t=open(html_file, "r")
    for v in t.readlines():
        response.append(v + "\n")
    clientsocket.sendall('%s' % (response))
 clientsocket.close()
 print ('S-a terminat comunicarea cu clientul.')
