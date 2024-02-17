import styled from 'styled-components';
import Layout from 'components/Layout/Layout';
import Card from 'components/Card/Card';
import { CardsWrapper } from 'components/Card/Card';

// Add this utility function at the top of the file
const getImagePath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' 
    ? '/React-D3-VizHub-Interactive-Data-Insights' 
    : '';
  return `${basePath}${path}`;
};

const Wrapper = styled.div`
  padding: 5rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;

  span {
    display: block;
    font-size: 2rem;
    font-weight: 400;
    color: #696969;
    margin-top: 1rem;
  }
`;

function Home() {

const cards = [
    {
      bgUrl: getImagePath('/images/bubble-map.png'),
      title: 'WHO Covid-19 World Dashboard',
      chartType: 'Bubble Map',
      link: '/React-D3-VizHub-Interactive-Data-Insights/covid19-dashboard',
    },
    {
      bgUrl: getImagePath('/images/line-chart.png'),
      title: 'Korea Crop Production',
      chartType: 'Line Chart',
      link: '/React-D3-VizHub-Interactive-Data-Insights/korea-crop-production',
    },
    {
      bgUrl: getImagePath('/images/bar-chart.png'),
      title: 'Top 20 Countries by Population 2020',
      chartType: 'Bar Chart',
      link: '/React-D3-VizHub-Interactive-Data-Insights/most-populated-countries',
    },
    {
      bgUrl: getImagePath('/images/scatter-plot.png'),
      title: 'Literacy Rates by Country',
      chartType: 'Scatter Plot',
      link: '/React-D3-VizHub-Interactive-Data-Insights/literacy-rates-by-country',
    },
];

  return (
    <Layout headTitle="Data Visualization">
      <Wrapper>
        <Title>
          📊 &nbsp; Data Visualization<span>with D3.js and React</span>
        </Title>
        <CardsWrapper>
          {cards.map((card, i) => (
            <Card
              bgUrl={card.bgUrl}
              title={card.title}
              chartType={card.chartType}
              link={getImagePath(card.link)}  // Also update the link paths
              key={i}
            />
          ))}
        </CardsWrapper>
      </Wrapper>
    </Layout>
  );
}

export default Home;
