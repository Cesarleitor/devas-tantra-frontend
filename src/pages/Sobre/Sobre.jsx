
import './Sobre.css'
import bianca from '../../assets/images/bianca.jpg'
import bianca2 from '../../assets/images/bianca2.jpeg'

function Sobre() {
    return (
        <main className="sobre-page">
            {/* Apresentação */}

            {/* Apresentação */}
            <section className="sobre-hero">
                <div className="sobre-container sobre-hero__layout">
                    <div className="sobre-hero__content">
                        <p className="sobre-eyebrow">Minha história</p>

                        <h1>
                            Prazer, consciência e transformação:
                            <span> o caminho de volta para si</span>
                        </h1>

                        <p className="sobre-hero__description">
                            Uma jornada de autoconhecimento, presença e reconexão
                            com a própria essência.
                        </p>
                    </div>

                    <div className="sobre-hero__photo-wrapper">
                        <img
                            src={bianca}
                            alt="Bianca Sganderlla"
                            className="sobre-hero__image"
                        />
                    </div>
                </div>
            </section>


            {/* Minha jornada */}
            <section className="sobre-section">
                <div className="sobre-container sobre-container--narrow">
                    <p className="sobre-eyebrow">O início de uma jornada</p>

                    <h2>Minha jornada no tantra</h2>

                    <p>
                        Minha jornada no tantra marcou o início de um profundo
                        processo de autoconhecimento. Foi quando comecei a
                        direcionar o olhar para dentro, a investigar minhas
                        emoções, reconhecer minhas feridas e questionar padrões
                        que, até então, eu reproduzia sem perceber.
                    </p>

                    <p>
                        Descobri que olhar para si exige coragem. É um movimento
                        que nos convida a revisitar a própria história, reconhecer
                        nossas vulnerabilidades e compreender como as experiências
                        vividas influenciam nossas escolhas, nossos relacionamentos
                        e a maneira como nos posicionamos diante da vida.
                    </p>

                    <p>
                        Ao longo desse caminho, percebi que estava repetindo
                        padrões familiares, reproduzindo comportamentos que faziam
                        parte da minha história, mas que nem sempre correspondiam
                        à pessoa que eu desejava me tornar.
                    </p>

                    <p>
                        Esse reconhecimento me levou a um importante processo de
                        amadurecimento: acolher minhas feridas, compreender minha
                        história e assumir a responsabilidade pelas escolhas que
                        eu poderia transformar.
                    </p>

                    <p>
                        Era o momento de deixar de viver a partir das dores da
                        criança ferida e começar a construir relações e experiências
                        a partir de uma consciência mais madura, presente e responsável.
                    </p>
                </div>


            </section>

            {/* Dor e consciência */}
            <section className="sobre-section sobre-section--highlight">
                <div className="sobre-container sobre-container--narrow">
                    <p className="sobre-eyebrow">Ressignificar para transformar</p>

                    <h2>Quando a dor se transforma em consciência</h2>

                    <p>Uma das experiências mais profundas da minha trajetória foi a traição.</p>

                    <p>
                        Nascer de uma traição e, posteriormente, me envolver com uma
                        pessoa comprometida me levou a olhar para aspectos da minha
                        história que precisavam ser compreendidos e ressignificados.
                    </p>

                    <p>
                        Foi um convite a reconhecer padrões, questionar escolhas e
                        investigar aquilo que, de maneira consciente ou inconsciente,
                        eu continuava reproduzindo.
                    </p>

                    <p>
                        Compreendi que conhecer a própria história não significa
                        permanecer preso a ela. Significa reconhecer o que nos
                        atravessou para que possamos fazer escolhas diferentes.
                    </p>

                    <p>
                        Essa experiência me ensinou sobre responsabilidade afetiva,
                        valores, limites e, sobretudo, sobre a importância de
                        reconhecer o próprio valor sem depender da validação de
                        outra pessoa.
                    </p>

                    <p>
                        Aprendi que transformar uma história não é apagar o que
                        aconteceu, mas mudar a maneira como nos relacionamos com
                        ela e com aquilo que escolhemos construir a partir de então.
                    </p>
                </div>
            </section>

            {/* O prazer */}
            <section className="sobre-section">
                <div className="sobre-container sobre-container--narrow">
                    <p className="sobre-eyebrow">Presença e conexão</p>

                    <h2>O verdadeiro significado do prazer</h2>

                    <p>
                        Foi nesse processo que comecei a compreender o prazer de
                        uma maneira muito mais ampla.
                    </p>

                    <p>
                        Prazer não é apenas sexo. É presença, conexão, vitalidade
                        e a capacidade de experimentar a vida de forma consciente.
                    </p>

                    <p>
                        É perceber o próprio corpo, reconhecer os desejos, acolher
                        as emoções e permitir-se viver com mais autenticidade.
                    </p>

                    <p>
                        A sexualidade faz parte da nossa existência e merece ser
                        compreendida para além dos julgamentos, dos rótulos e dos
                        tabus que ainda a cercam.
                    </p>

                    <p>
                        Quando não encontramos espaço para falar sobre nossos
                        desejos, limites e necessidades, podemos nos distanciar de
                        nós mesmos e estabelecer relações nas quais falta comunicação,
                        intimidade e conexão verdadeira.
                    </p>

                    <p>
                        Acredito que falar sobre sexualidade com consciência é
                        abrir espaço para relações mais saudáveis, para o respeito
                        à individualidade e para uma compreensão mais profunda de
                        quem somos.
                    </p>

                    <p>
                        O tantra ampliou meu olhar sobre essa dimensão da existência,
                        convidando-me a compreender o corpo, a energia, a presença
                        e a conexão como caminhos possíveis de autoconhecimento.
                    </p>

                    <p>
                        Viver com prazer é aprender a estar presente. É habitar o
                        próprio corpo, reconhecer a própria essência e construir
                        uma relação mais consciente consigo e com o mundo.
                    </p>
                </div>
            </section>

            {/* Amor e relações */}
            <section className="sobre-section sobre-section--highlight">
                <div className="sobre-container sobre-container--narrow">
                    <p className="sobre-eyebrow">Vínculos conscientes</p>

                    <h2>Amor, merecimento e relações conscientes</h2>

                    <p>
                        Ao longo da minha jornada, compreendi que reconhecer nossos
                        valores e virtudes é fundamental para construirmos relações
                        mais saudáveis.
                    </p>

                    <p>
                        O amor a dois pode ser um espaço de crescimento, troca,
                        intimidade e expansão. Para isso, acredito que é necessário
                        desenvolver a capacidade de olhar para além do ego, respeitar
                        as diferenças, comunicar necessidades e construir vínculos
                        nos quais ambas as pessoas possam crescer sem deixar de ser
                        quem são.
                    </p>

                    <p>Mas esse movimento também exige amor-próprio.</p>

                    <p>
                        Não podemos colocar nas mãos de outra pessoa a responsabilidade
                        de definir nosso valor ou preencher todos os espaços que ainda
                        não aprendemos a acolher dentro de nós.
                    </p>

                    <p>
                        Quando desenvolvemos uma relação mais consciente conosco,
                        começamos a reconhecer nossos limites, compreender nossas
                        necessidades e fazer escolhas mais coerentes com aquilo que
                        valorizamos.
                    </p>

                    <p>
                        Isso não significa deixar de precisar do outro. Significa
                        construir relações a partir da liberdade de compartilhar
                        a vida, e não da necessidade de abandonar a si mesmo para
                        ser amado.
                    </p>
                </div>
            </section>

            {/* Energia e propósito */}
            <section className="sobre-section">
                <div className="sobre-container sobre-container--narrow">
                    <p className="sobre-eyebrow">Consciência e realização</p>

                    <h2>Energia, propósito e prosperidade</h2>

                    <p>
                        Hoje, compreendo que a energia que cultivamos e a maneira
                        como direcionamos nossa atenção influenciam a forma como
                        nos posicionamos diante da vida.
                    </p>

                    <p>
                        A energia sexual, quando compreendida e canalizada com
                        consciência, pode ser explorada como uma dimensão da
                        vitalidade humana, da criatividade e da expressão pessoal.
                    </p>

                    <p>
                        Essa perspectiva também me leva a refletir sobre prosperidade
                        e realização.
                    </p>

                    <p>
                        Prosperar não significa apenas conquistar bens materiais.
                        Significa ampliar possibilidades, desenvolver recursos
                        internos, reconhecer oportunidades e construir uma vida
                        alinhada aos nossos valores e objetivos.
                    </p>

                    <p>
                        Acredito que o autoconhecimento pode nos ajudar a identificar
                        padrões que limitam nossas escolhas, fortalecer nossa
                        autonomia e agir com mais clareza na direção daquilo que
                        desejamos realizar.
                    </p>

                    <p>
                        Não se trata de esperar que a vida se transforme por si só,
                        mas de desenvolver consciência para participar ativamente
                        dessa transformação.
                    </p>
                </div>
                <div className="sobre-container">
                    <div className="sobre-story__photo-wrapper">
                        <img
                            src={bianca2}
                            alt="Bianca Sganderlla em um momento de sua jornada"
                            className="sobre-story__image"
                        />
                    </div>
                </div>
            </section>

            {/* Meu propósito */}
            <section className="sobre-section sobre-section--purpose">
                <div className="sobre-container sobre-container--narrow">
                    <p className="sobre-eyebrow">O que me move</p>

                    <h2>Meu propósito</h2>

                    <p>
                        Tudo o que vivi e aprendi ao longo dessa jornada contribuiu
                        para a construção do trabalho que realizo hoje.
                    </p>

                    <p>
                        Meu propósito é compartilhar conhecimentos e experiências
                        que possam ajudar homens e mulheres a reconhecer suas
                        energias, compreender seus padrões, desenvolver uma relação
                        mais consciente com o corpo e a sexualidade e descobrir
                        novas possibilidades de crescimento pessoal.
                    </p>

                    <p>
                        Quero contribuir para que cada pessoa possa reconhecer seu
                        próprio valor, estabelecer relações mais saudáveis, viver
                        com mais presença e direcionar sua potência para aquilo que
                        deseja construir.
                    </p>

                    <p>
                        Acredito que cada história é única e que o processo de
                        transformação acontece de maneira diferente para cada pessoa.
                        Não existe um caminho igual para todos, mas existe a
                        possibilidade de olhar para si com mais consciência,
                        responsabilidade e abertura para o novo.
                    </p>

                    <p>
                        O caminho do autoconhecimento não nos transforma em outras
                        pessoas. Ele nos permite reconhecer quem somos para que
                        possamos escolher, com mais liberdade, quem desejamos nos
                        tornar.
                    </p>

                    <p>
                        É esse caminho de consciência, prazer e transformação que
                        desejo compartilhar.
                    </p>

                    <p className="sobre-closing">
                        Seja bem-vindo. Seja bem-vinda.
                    </p>

                    <p>
                        Este é um espaço de reconexão consigo, com sua essência e
                        com as possibilidades que começam a surgir quando você
                        passa a viver de forma mais consciente.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Sobre
