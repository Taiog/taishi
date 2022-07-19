import { Container, Text, Title } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Image0 from '../assets/lsf/0.jpg';
import Image1 from '../assets/lsf/1.jpg';
import Image2 from '../assets/lsf/2.jpg';
import Image3 from '../assets/lsf/3.jpg';
import Image4 from '../assets/lsf/4.jpg';
import Image5 from '../assets/lsf/5.jpg';
import Image6 from '../assets/lsf/6.jpg';

import styles from '../styles/Lsf.module.scss';

const Lsf: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>{formatMessage({ id: 'header.lsf' })}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <Container
          size="xl"
          style={{
            padding: '2rem',
          }}
        >
          <Title
            align="center"
            order={2}
            style={{
              fontSize: '2.5rem',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat',
            }}
          >
            <FormattedMessage id="header.lsf" />
          </Title>
          <Text className={styles.paragraph}>
            O LSF consiste em um método construtivo racional, que tem
            como característica, uma estrutura constituída por perfis
            de aço galvanizados de pouca espessura, formados a frio e
            utilizados nos componentes estruturais e não estruturais
            da edificação. Seguindo as orientações da Norma Brasileira
            – NBR 15253:2014, as bobinas de aço utilizadas na
            fabricação, devem ser revestidas com zinco ou liga
            alumínio-zinco pelo processo contínuo de imersão a quente.
          </Text>
          <Text className={styles.paragraph}>
            A proteção com zinco, dos perfis, tem como objetivo,
            evitar a corrosão do aço, podendo empregá-lo em áreas com
            a classe de agressividade elevada, como por exemplo, áreas
            litorâneas.
          </Text>
          <Text className={styles.paragraph}>
            O LSF não se resume apenas às estruturas. O sistema é
            dividido em diversos componentes e “subsistemas”, são
            eles: estrutural, de fundação, de isolamento
            termoacústico, de fechamento interno e externo, de
            instalações elétricas e hidráulicas. Para que a construção
            atinja seu desempenho desejado, é preciso que esses
            subsistemas estejam corretamente harmonizados e os
            materiais utilizados sejam ideais para cada situação,
            sendo assim, a escolha dos materiais e a mão de obra
            influenciam diretamente no prazo de entrega do serviço.
          </Text>
          <Image alt="LSF" src={Image0} />
          <Text className={styles.paragraph}>
            O conceito da concepção estrutural do LSF é dividir a
            carga total em diversos elementos estruturais, assim,
            resistindo cada um deles a uma pequena parcela. Dessa
            maneira, é possível utilizar perfis menos espessos e
            formar painéis mais leves e de fácil manipulação.
          </Text>
          <Text className={styles.paragraph}>
            As paredes constituídas pela estrutura são denominadas de
            painéis estruturais e são formadas por vários perfis
            espaçados em 400 ou 600 mm, cujo espaçamento é determinado
            de acordo com projeto estrutural. Os espaçamentos estão
            relacionados à modulação dos painéis, aumentando assim, a
            eficiência e qualidade final, otimizando custos e mão de
            obra. Os painéis estruturais têm a função de transmitir as
            cargas para a fundação, distribuindo-as uniformemente
          </Text>
          <Image alt="LSF" src={Image1} />
          <Text className={styles.paragraph}>
            O processo de fabricação do perfil de aço utilizado no
            sistema LSF é mecânico, sendo moldado à temperatura
            ambiente a partir de bobinas de aço, e sua resistência ao
            escoamento (fy) deve ser maior do que 230 MPa, para os
            perfis cuja função é estrutural, segundo as recomendações
            da NBR 15253:2014. A espessura dos perfis utilizados no
            LSF varia entre 0,8mm a 3mm.
          </Text>
          <Text className={styles.paragraph}>
            A padronização da largura dos perfis utilizados no LSF
            para montantes, utilizando o perfil Ue, é de 90 mm, 140 mm
            e 200mm, já para guias, utilizando o perfil U, as larguras
            indicadas pela norma são 92mm, 142mm e 202mm. Os perfis
            podem ter outras variações de dimensão, desde que o
            projeto estrutural atenda aos critérios exigidos pela NBR
            14762.
          </Text>
          <Image alt="LSF" src={Image2} />
          <Text className={styles.paragraph}>
            Quando se trata de fundação no LSF, a grande vantagem é a
            economia gerada pelo baixo peso próprio da estrutura,
            quando comparado com os métodos construtivos mais
            utilizados. Para a maioria das construções residenciais,
            são utilizadas fundações rasas, tipo radier ou sapata
            corrida. A fundação é executada normalmente como em
            qualquer outro método construtivo, deve-se ter o cuidado
            em realizar uma boa impermeabilização para evitar
            manifestações patológicas devido à presença de umidade na
            estrutura
          </Text>
          <Text className={styles.paragraph}>
            A ancoragem dos painéis na fundação ocorre em duas etapas,
            primeiramente é feito uma fixação provisória apenas para o
            posicionamento do painel no local correto, após o
            posicionamento dos demais painéis que compõem a estrutura
            das paredes, os painéis são então alinhados em prumo e
            esquadro, logo após, é feita a fixação definitiva por meio
            de chumbadores, sendo eles mecânicos ou químicos
          </Text>
          <Text className={styles.paragraph}>
            Entre os chumbadores mecânicos, existe a opção por
            parafusos especiais para concreto que fazem a fixação de
            forma simples, apresentando maior carga e resistência,
            podendo ser reutilizado sem perder suas características.
          </Text>
          <Image alt="LSF" src={Image3} />
          <Text className={styles.paragraph}>
            Sendo o fechamento vertical, o sistema que compõe as
            paredes internas e externas de uma edificação, no LSF os
            materiais de fechamento seguem os conceitos de baixo peso
            próprio e obra seca. Outro conceito seguido, é o da
            racionalização das vedações, buscando um maior grau de
            industrialização. A modulação da estrutura deve ser
            projetada visando a otimização com os fechamentos, as
            placas aplicadas, possuem em sua maioria largura de 1,20m,
            múltiplo da modulação 400mm ou 600mm
          </Text>
          <Image alt="LSF" src={Image4} />
          <Text className={styles.paragraph}>
            Na imagem acima podemos ver um tipo de composição para a
            parede de LSF. Nela, podemos observar que internamente é
            utilizado a placa de gesso acartonado, assim como é
            utilizada no Drywall, sistema já conhecido pelos
            brasileiros.
          </Text>
          <Text className={styles.paragraph}>
            Entre os perfis de aço, temos a aplicação de um material
            isolante, podendo ser ele: lã de vidro, lã de rocha, lã de
            PET, ou outro material que garanta um isolamento térmico e
            acústico, sendo os citados os mais utilizados.
          </Text>
          <Text className={styles.paragraph}>
            A primeira camada do lado externo da parede é a barreira
            impermeável, também chamada de manta hidrófuga, esse
            componente é como um tecido que envolve toda a fachada da
            edificação, não permitindo a passagem de água, porém
            permite a saída do vapor de água de dentro para fora da
            edificação, isso resulta no não acúmulo de umidade no
            interior do ambiente.
          </Text>
          <Text className={styles.paragraph}>
            Após a manta hidrófuga, temos a placa cimentícia, sua
            aplicação exige que sejam deixadas juntas entre as placas,
            que posteriormente são tratadas com uma fita de fibra de
            vidro e uma argamassa específica. Com as juntas tratadas é
            feita então a aplicação do basecoat, que é uma argamassa
            cimentícia que junto com uma tela de fibra de vidro serve
            como base para o acabamento.
          </Text>
          <Text className={styles.paragraph}>
            A estrutura do piso, também é confeccionada em perfis
            galvanizados, são montados horizontalmente e devem
            obedecer à modulação dos montantes. Os perfis que compõem
            as vigas de piso, fazem parte da base que irá receber os
            materiais que formam o contrapiso.
          </Text>
          <Text>Laje seca</Text>
          <Image alt="LSF" src={Image5} />
          <Text>Laje úmida </Text>
          <Image alt="LSF" src={Image6} />
          <Text className={styles.paragraph}>
            O sistema possibilita uma liberdade arquitetônica e
            soluções para as coberturas dos edifícios,
            independentemente do estilo adotado, seja cobertura plana
            ou telhado inclinado, a versatilidade do LSF abrange todas
            as formas. Para telhados inclinados, a composição se
            assemelha à construção convencional, mas utilizando perfis
            galvanizados no lugar da madeira. É mantida a liberdade na
            escolha das telhas que serão utilizadas na cobertura,
            podendo ser de qualquer material
          </Text>
          <Text className={styles.paragraph}>
            O emprego das instalações não sofre qualquer alteração de
            projeto e dimensionamento; os materiais utilizados podem
            ser iguais aos aplicados na alvenaria. Sejam instalações
            sanitárias, telefone, elétrica, TV ou aquecimento solar,
            não é necessária adaptação de caminhamento nem de perda de
            carga por se tratar de uma edificação em LSF. Deve-se
            apenas tomar cuidados relacionados ao suporte e montagem
            para fixação, pelo fato das paredes não possuírem massa em
            seu interior.
          </Text>
          <Text className={styles.paragraph}>
            Fica claro que todo o procedimento de instalação dos
            sistemas se torna mais prático, quando comparado ao
            sistema convencional. Não há necessidade de rasgos na
            parede para passagem de tubulações, deixando o serviço
            mais limpo. A visualização por completo da instalação
            permite a identificação precoce de interferências entre
            sistemas, permitindo ainda testar os sistemas antes de
            fechar a parede. Já em uso, quando uma manutenção for
            necessária, a mesma repete as vantagens da fase de
            construção, tornando o serviço prático e limpo de se
            fazer.
          </Text>
          <Text className={styles.paragraph}>Referências:</Text>
          <Text className={styles.paragraph}>
            ________. NBR 15253 – Perfis de aço formados a frio, com
            revestimento metálico, para painéis reticulados em
            edificações: Requisitos Gerais. Rio de Janeiro: 2014.
          </Text>
          <Text className={styles.paragraph}>
            BARROS, V. V. B. Estruturas em light steel framing:
            projeto e dimensionamento em softwares 3D. Uberlândia/MG:
            2017.
          </Text>
          <Text className={styles.paragraph}>
            FREITAS, A. M. S; CRASTRO. R. C. M de; SANTIAGO, A. K.
            Manual de construção em aço – steel framing: arquitetura.
            Belo Horizonte: CBCA, 2012.
          </Text>
          <Text className={styles.paragraph}>
            MANUAL DE PROCEDIMIENTO construcción con steel framing.
            Buenos Aires: Consul Steel, 2002.
          </Text>
          <Text className={styles.paragraph}>
            NEIVA, Sávio. Sociedade do aço. Cotia, São Paulo, 2020.
          </Text>
          <Text className={styles.paragraph}>
            RODRIGUES, F. C. Manual de construção em aço: steel
            framing. 2016.
          </Text>
          <Text className={styles.paragraph}>
            WALSYWA. Catálogo 2020. Disponível em:
            https://www.walsywa.com.br/wpcontent/uploads/2020/05/2193_Catalogo_Walsywa_Completo_02c_compressed.pdf.
          </Text>
        </Container>
      </main>
    </>
  );
};

export default Lsf;
