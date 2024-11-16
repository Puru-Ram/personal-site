/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Mouser Electronics',
    position: 'Technical Content Specialist II',
    startDate: '2022-02-14',
    endDate: 'Till Present',
    highlights: [
      'Created microsites for TTI website, crafting original content for electronic product web pages utilizing manufacturer materials and independent sources.',
      'Create comprehensive software documentation and user guide manuals, including technical specifications, integration guides, and user instructions.',
      'Enhanced content quality through meticulous proofreading, editing, and thorough reviews.',
      'Facilitated creative planning and review sessions, collaborating with a resourceful team to elevate content and design quality.',
      'Generated innovative content for promotional advertisements and marketing materials.',
      'Collaborated and communicated effectively with graphic artists, post-production team members, and specialists to produce engaging content.',
      'Managed competing deadlines efficiently, demonstrating independence and ownership of research-related tasks from recruitment to analysis.',
      'Organized gathered information to create well-written articles.',
      'Crafted SEO-optimized content using keywords from SEMrush to improve search engine rankings.',
      'Conducted competitive analysis and comprehensive desk research before microsite design.',
      'Analyzed and synthesized qualitative and quantitative results, delivering actionable insights to stakeholders.',
      'Collaborated closely with team lead and managers to develop results-driven marketing strategies based on work queues, workflows, updates, and changes.',
      'Revamped and modernized over 500 outdated product pages to the new format.',
      'Researched supplier websites to enrich content pages with additional information, videos, brochures, etc.',
      'Utilized AEM for designing and maintaining TTI Intranet pages.',
      'Designed and published Intranet pages and newsletters for GRC regions, following the Double Diamond Theory – Discover, Define, Ideate, Design, and Test.',
      'Develop detailed hardware documentation using Adobe FrameMaker, including datasheets and catalogs.',
      'Conducted training sessions for the new hires on processes and operations, and conducted individual quality audits.',
      'Played a pivotal role in establishing a team from the ground up for the organization.'
,
    ],
  },
  {
    name: 'Sri Vinayaka Enterprises, Bangalore',
    position: 'Entrepreneur',
    startDate: '2018-08-01',
    endDate: '2022-01-01',
    highlights: [
      'Conducting time and motion studies to optimize production processes.',
      'Designing efficient workstations and layouts to enhance productivity.',
      'Analyzing and improving workflow and process efficiency.',
      'Implementing lean manufacturing principles to reduce waste and enhance production.',
      'Developing and maintaining production standards and procedures.',
      'Collaborating with cross-functional teams to resolve operational issues.',
      'Utilizing data analysis to identify areas for process improvement.',
      'Managing quality control processes to ensure product consistency.',
    ],
  },
  {
    name: 'Volvo Construction Equipment Ltd. (VCE), Peenya, Bangalore',
    position: 'Engineering Internship',
    startDate: '2016-05-04',
    endDate: '2016-07-09',
    highlights: [
      'Construction Equipment manufacturing and assembly lines.',
      'Worked on improving of 6S conditions in mix model assembly line by efficient space management (using DMAIC methodology).'
,
    ],
  },
];

export default work;
