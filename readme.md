# Sobre o projeto

    O projeto foi inspirado em duas páginas do Google Account e tem como objetivo comunicar ao usuário acessos estranhos à sua conta. O projeto funciona da seguinte maneira, o front-end faz uma requisição pro back-end (api) que retorna uma resposta contendo um objeto que simula as informações vindas de um novo acesso à sua conta utilizando um dispositivo diferente em uma cidade diferente e com um navegador diferente do habitual essa reposta é formatada em um array que é usado para uma comparação com o ultimo acesso autenticado da sua conta. 

# Funções do package.js

## retornaAcessoCadastrado
    A função retornaAcessoCadastrado foi construida dessa maneira para emular uma requisição a um banco de dados que retornaria uma resposta contendo as informações do ultimo acesso que foi autenticado pelo usuário e posteriormente essa resposta seria formatada como a resposta da função chamaApi, porém, para poupar tempo no desenvolvimento do projeto eu optei por fazer com que a função retorne apenas um array simples que simula a resposta do back-end já formatada. 

    Durante o desenvolvimento do projeto eu me deparei com a possibilidade de utilizar ferramentas como UAParser.js, ipinfo.io e FingerprintJS para obter o endereço, o ip e o navegador do usuário que estivesse usando o meu projeto para utilizar essas informações no sistema de detecção de anomalias com o propósito de tornar o sistema de detecção de anomalias "mais real", porém, essa ideia foi descartada porque eu não queria mexer com dados sensíveis.

## getItensDoHistoricoDeAnomalias
    As informações armazenadas pela função getItensDoHistoricoDeAnomalias poderiam ter sido armazenadas de diferentes maneiras utilizando diferentes ferramentas e funcionalidades por exemplo utilizando cookies, porém eu gostaria que o comportamento que a página demonstra quando não possui nenhuma anomalia detectada fosse observada da maneira mais simples possível e pudesse ser revisitada apenas fechando a guia da página e a reabrindo.   

# Tecnologias utilizadas e tarefas do gulpfile.js
gulp: ferramenta de automação responsável por permitir a criação de tarefas que são utilizadas para automatizar ações no código agilizando o tempo de desenvolvido do projeto.
    Tarefas presentes no gulpfile.js: 
        compilaSass
            Tarefa responsável por compilar o sass presente em ('./src/styles/**/*.scss') e converter em css, fazer o mapa do css que é responsavel por indicar no arquivo de scss cada linha de código de estilo correspondente no scss ao invez de apontar para o css minificado e ilegível, sem esse mapa o navegador apontaria para o código de css, renomear os arquivos de css com o sufixo .min e enviar todos esses arquivos processados para ('./dist/styles').

        comprimeHtml
            Tarefa responsável por comprimir o html presente em ("./src/*.html") e enviar para ("./dist"), removendo os espaços em branco do código no processo.

        minificaImagens 
            Tarefa responsável por minificar os arquivos presentes em ("./src/images/*.{png,jpg,svg,gif}") e enviar para ("./dist/images") diminuindo o consumo de internet e otimizar o desempenho do projeto.

        compilaJavaScript
            Tarefa responsável por transpilar os códigos javascript presentes em ("./src/scripts/*.js") e enviar para ("./dist/scripts") dificultando a leitura do código para o usuário final e renomeando os arquivos com o sufixo '.min' ao decorrer do processo.

        default
            Quando o comando gulp for executado no terminal a tarefa padrão fica responsável por executar as demais tarefas.

        watchFiles
            Após o comando gulp watch ser executado no terminal a tarefa fica responsável por executar as tarefas anteriores (menos a default) quando alguma mudança for detectada no código.


gulp-babel: plugin responsável por transpilar o código para que navegadores antigos consigam interpretar funcionalidades mais recentes e modernas do javascript.

gulp-htmlmin: plugin responsável por minificar o html fazendo com que o projeto seja mais otimizado e consuma menos internet.
 
gulp-clean-css: plugin responsável por minificar o css e fazer com que o projeto seja mais otimizado e consuma menos internet.

gulp-imagemin: plugin responsável por minificar as imagens fazendo com que o projeto seja mais otimizado e consuma menos internet

gulp-rename: plugin responsável por renomear o sufixo dos arquivos processados pelos demais plugins atribuindo o sufixo '.min' para eles.

gulp-sass: plugin responsável por transpilar o código scss em css.

gulp-sourcemaps: plugin responsável por criar os maps que fazem o console e o navegador interpretar os erros que ocorrem apontando para as linhas de scss em vez das de css minificadas e ilegíveis.
    
gulp-uglify: plugin responsável por tornar o código javascript ilegível para o usuário final, dificultando assim a leitura do código.

sass: pré processador css contém diversas funcionalidades que auxiliam na redução do tempo de desenvolvimento do projeto.