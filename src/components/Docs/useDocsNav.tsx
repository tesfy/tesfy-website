import { useStaticQuery, graphql } from 'gatsby';

export interface NavSection {
  menu: string | null;
  name: string;
  route: string;
  title: string;
  order?: number;
}

export interface NavContent {
  [key: string]: NavSection | Array<NavSection>;
}

const QUERY = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            menu
            name
            route
            title
            order
          }
        }
      }
    }
  }
`;

const MENU = ['JavaScript', 'React'];

const useDocsNav = () => {
  const { allMdx } = useStaticQuery(QUERY);

  const getSections = (): Array<NavSection> => {
    return allMdx.edges.map((edge: Record<string, any>) => edge.node.frontmatter);
  };

  const getContent = (): NavContent => {
    const sections = getSections();

    return sections
      .sort((prevSection, nextSection) => {
        const prevIndex = MENU.indexOf(prevSection.menu || prevSection.name);
        const nextIndex = MENU.indexOf(nextSection.menu || nextSection.name);

        if (prevIndex === nextIndex) {
          const prevOrder = prevSection.order || Infinity;
          const nextOrder = nextSection.order || Infinity;

          return prevOrder - nextOrder;
        }

        return prevIndex - nextIndex;
      })
      .reduce((map: NavContent, section: NavSection) => {
        const { menu, name } = section;

        if (!menu) {
          return {
            ...map,
            [name]: section
          };
        }

        const sections = (map[menu] || []) as Array<NavSection>;

        return {
          ...map,
          [menu]: [...sections, section]
        };
      }, {});
  };

  return getContent();
};

export default useDocsNav;
