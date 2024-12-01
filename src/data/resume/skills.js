const skills = [
  {
    title: 'DITA',
    competency: 5,
    category: ['Languages', 'Technical Writing'],
  },
  {
    title: 'Markdown',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'XML',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'SEMrush',
    competency: 4,
    category: ['Tools', 'SEO'],
  },
  {
    title: 'Adobe Experience Manager',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Adobe Frame Maker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Markup',
    competency: 4,
    category: ['Languages', 'Databases', 'Web Development'],
  },
  {
    title: 'Camtasia',
    competency: 4,
    category: ['tools', 'Web Development'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'SQL',
    competency: 1,
    category: ['Language', 'Web Development'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Platforms', 'Cloud', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
