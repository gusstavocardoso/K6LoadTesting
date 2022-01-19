# K6 Load Testing
Repositório para estudos de testes de carga com K6.

#### Modos de Instalação Windows

- Gerenciador de pacote Chocolatey
`choco install k6`
- Gerenciador de pacote Windows
`winget install k6`
- Baixar e instalar manualmente [ latest official .msi package.](https://dl.k6.io/msi/k6-latest-amd64.msi)

#### Executando os testes 

- Linha de comando
`k6 run script.js`
- Adicionado mais usuários virtuais
`k6 run --vus 10 --duration 30s script.js`

#### Métricas Integradas

| Nome    | Tipo   |Descricação  |
| ------    | ------   | ------ |
| vus       | Gauge 	     |Número atual de usuários virtuais ativos   |
|vus_max    | Gauge     |Número máximo possível de usuários virtuais (recursos VU são pré-alocados, para garantir que o desempenho não seja afetado ao aumentar o nível de carga)                                              |
|iterações       |Counter     |O número agregado de vezes que os VUs no teste executaram o script JS (o padrão função).        |
|iteration_duration	       | Trend     |O tempo que levou para completar uma iteração completa da função padrão / principal.        |
| drop_iterations	      |Counter     | Contador Introduzido no k6 v0.27.0, o número de iterações que não puderam ser iniciadas devido à falta de VUs (para os executores da taxa de chegada)ou falta de tempo (devido ao maxDuration expirado nos executores baseados em iteração).|
| data_received	      | Counter     |A quantidade de dados recebidos. Leia este exemplo para rastrear dados para um URL individual.        |
|data_sent	       | Counter    | A quantidade de dados enviados. Leia este exemplo para rastrear dados para um URL individual.       |
|checks	   |Rate     |Avaliar	A taxa de verificações bem-sucedidas.        |


#### Métricas Integradas Específicas https

| Nome    | Tipo   |Descricação  |
| ------    | ------   | ------ |
|http_reqs       |Counter      |Quantas solicitações HTTP o k6 gerou, no total.        |
|http_req_blocked	       |Trend     |Tempo gasto bloqueado (esperando por um slot de conexão TCP livre) antes de iniciar a solicitação. **float**        |
|http_req_connecting	       |Trend      |Tempo gasto para estabelecer a conexão TCP com o host remoto. **float**         |
|http_req_tls_handshaking       |Trend      |Tempo gasto em handshaking de sessão TLS com host remoto        |
|http_req_sending	       |Trend	      |Tempo gasto no envio de dados ao host remoto. **float**        |
|http_req_waiting	       |Trend   |Tempo gasto esperando pela resposta do host remoto (também conhecido como “tempo até o primeiro byte” ou “TTFB”). **float**    |
|http_req_receiving       |Trend     |Tempo gasto no recebimento de dados de resposta do host remoto. **float**      |
|http_req_duration       |Trend     |Tempo total para o pedido. É igual ahttp_req_sending + http_req_waiting + http_req_receiving (ou seja, quanto tempo o servidor remoto demorou para processar a solicitação e responder, sem os tempos iniciais de pesquisa / conexão de DNS). **float**        |
|http_req_failed (≥ v0.31)       |Rate            |A taxa de solicitações com falha de acordo com setResponseCallback . |

#### Tipos de Métricas

| Tipo   |Descricação  |
| ------   | ------ |
|Counter **`Contador`**        |Uma métrica que soma cumulativamente os valores adicionados.            |
|Gauge **`Medidor`**          |Uma métrica que armazena os valores mínimo, máximo e os últimos valores adicionados a ela.            |
|Rate **`Taxa`**	          |Uma métrica que rastreia a porcentagem de valores adicionados que são diferentes de zero.            |
|Trend **`Tendência`**	          |Uma métrica que permite calcular estatísticas sobre os valores adicionados (mínimo, máximo, média e percentis). |

#### Métodos Disponíveis
| Nome     |Ação |
| ------   | ------ |
| batch()   | Realiza várias solicitações HTTP em paralelo (como, por exemplo, os navegadores tendem a fazer).          |
| del()     | Realiza uma solicitação HTTP DELETE.          |
| get()     | Realiza uma solicitação HTTP GET.          |
| options() | Realiza uma solicitação HTTP OPTIONS.          |
| patch()   | Realiza uma solicitação HTTP PATCH.          |
| post()    | Realiza uma solicitação HTTP POST.          |
| put()     | Realiza uma solicitação HTTP PUT.          |
| request() | Realiza qualquer tipo de solicitação HTTP.          |



