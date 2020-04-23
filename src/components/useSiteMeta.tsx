import { useStaticQuery, graphql } from 'gatsby';

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const useSiteMeta = () => {
  const { site } = useStaticQuery(QUERY);
  return site;
};

export default useSiteMeta;
