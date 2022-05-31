$c[Gatilho: (PREFIXO)clear]
$onlyPerms[MANAGEMESSAGES; :x: Você precisa da permissão `GERENCIAR MENSAGENS` para usar esse comando!]
$onlyBotPerms[MANAGEMESSAGES;:x: Eu preciso da permissão `GERENCIAR MENSAGENS` para apagar mensagens desse canal!]
$argsCheck[>1;:x: Escreva a quantidade de mensagens que você quer apagar! ex. `(PREFIXO)clear <quantidade>`]
$clear[$message[1];;no]
  :white_check_mark: Mensagens apagadas!
  $deletecommand
  $c[se você souber usar a função onlyIf você pode definir uma quantidade máxima de mensagens que seu bot pode apagar!]
  $c[BDSCRIPT 1]
