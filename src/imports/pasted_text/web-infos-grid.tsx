import { motion } from 'framer-motion'
import './WEBINFOS.css'

const gridData = [
  // row 1
  {
    id: 1, type: 'image-text', span: 3,
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    title: 'WEB INFOS: intelligence\nDream. Solve. Prove. Repeat.',
  },
  {
    id: 2, type: 'color', span: 3, bgColor: '#1892a0',
    title: 'EXPERIENCE "WEB INFOS INTELLIGENCE" AT WORLD ECONOMIC FORUM 2025.',
    link: 'READ MORE >'
  },
  {
    id: 3, type: 'image-logo', span: 3,
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    logo: 'WEB INFOS: | HFS',
  },
  {
    id: 4, type: 'color', span: 3, bgColor: '#06a47a',
    title: 'WEB INFOS INTELLIGENCE: THE AI-INFUSED PLATFORM FOR ENTERPRISE-SCALE TRANSFORMATION',
    link: 'READ MORE >'
  },
  
  // row 2
  {
    id: 5, type: 'color', span: 3, bgColor: '#2570b0',
    title: 'INTRODUCING THE WEB INFOS INNOVATION NETWORK',
    content: 'Catalyst for exponential transformation.',
    link: 'READ MORE >'
  },
  {
    id: 6, type: 'image', span: 3,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 7, type: 'color', span: 3, bgColor: '#557df6',
    title: "WEB INFOS ACQUIRES HARMAN'S DIGITAL TRANSFORMATION SOLUTION (DTS) BUSINESS UNIT.",
    link: 'READ MORE >'
  },
  {
    id: 8, type: 'image', span: 3,
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
  },

  // row 3
  {
    id: 9, type: 'color-image', span: 3, bgColor: '#000000',
    title: 'HARVARD\nBUSINESS\nREVIEW',
  },
  {
    id: 10, type: 'color', span: 3, bgColor: '#331a54',
    title: 'DRIVING BUSINESS VALUE WITH AGENTIC AI',
    content: 'A Harvard Business Review Analytic Services Report sponsored by WEB INFOS',
    link: 'READ MORE >'
  },
  {
    id: 11, type: 'image', span: 3,
    src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 12, type: 'color', span: 3, bgColor: '#6b639e',
    title: 'THE NEXT BIG THING: ARTIFICIAL INTELLIGENCE',
    content: 'A Consumer Goods Technology CEO report in collaboration with WEB INFOS',
    link: 'READ MORE >'
  },

  // row 4 (span 6)
  {
    id: 13, type: 'overlay', span: 6,
    src: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    title: 'State of Cybersecurity Report 2025'
  },
  {
    id: 14, type: 'overlay', span: 6,
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    title: 'Customer\nSuccess Stories'
  },

  // row 5 (span 4)
  {
    id: 15, type: 'earnings', span: 4, bgColor: '#2c1e69',
    title: 'EARNINGS',
    stats: [
      { label: 'IT Services Revenue', value: '$2,635 Mn', change: '▲ 1.4% QoQ in CC' },
      { label: 'Net Income', value: '$347.2 Mn', change: '▼ 3.9% QoQ' }
    ]
  },
  {
    id: 16, type: 'overlay-small', span: 4,
    src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop',
    title: 'WEB INFOS is proudly committed to achieving net-zero emissions by 2040'
  },
  {
    id: 17, type: 'overlay-small', span: 4,
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    title: 'Agentic AI: The New Frontier'
  }
];

export default function WEBINFOS() {
  const renderCell = (item) => {
    switch (item.type) {
      case 'color':
        return (
          <div className="inner-padding flex-col-between color-hover">
            <div>
              <h3>{item.title}</h3>
              {item.content && <p>{item.content}</p>}
            </div>
            {item.link && <a href="#" className="wipro-link">{item.link}</a>}
          </div>
        )
      case 'image':
        return <img src={item.src} className="cell-bg-image" alt="grid content" />
      case 'image-text':
        return (
          <>
            <img src={item.src} className="cell-bg-image dim-image" alt="grid content" />
            <div className="inner-padding relative-z">
              <h2 className="title-large" style={{ whiteSpace: 'pre-line' }}>{item.title}</h2>
            </div>
          </>
        )
      case 'image-logo':
        return (
          <>
            <img src={item.src} className="cell-bg-image dim-image" alt="grid content" />
            <div className="inner-padding relative-z align-center">
              <h2 className="logo-text">{item.logo}</h2>
            </div>
          </>
        )
      case 'color-image':
        return (
          <div className="inner-padding relative-z hbr-logo-box">
             <div className="hbr-border">
               <span className="hbr-text">{item.title}</span>
             </div>
          </div>
        )
      case 'overlay':
      case 'overlay-small':
        return (
          <>
            <img src={item.src} className="cell-bg-image dim-image" alt="grid content" />
            <div className={`inner-padding relative-z flex-center ${item.type === 'overlay' ? 'overlay-large' : 'overlay-small'}`}>
              <h2>{item.title}</h2>
            </div>
          </>
        )
      case 'earnings':
        return (
          <div className="inner-padding flex-col">
            <h2 className="earnings-title">{item.title}</h2>
            <div className="earnings-stats">
              {item.stats.map((stat, idx) => (
                <div key={idx} className="earning-row">
                  <span className="earning-label">{stat.label}</span>
                  <span className="earning-value">{stat.value}</span>
                  <span className="earning-change">{stat.change}</span>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return null;
    }
  }

  return (
    <section className="wipro-grid-section">
      <div className="wipro-grid-container">
        {gridData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`wipro-cell col-span-${item.span}`}
            style={{ backgroundColor: item.bgColor || 'transparent' }}
          >
            {renderCell(item)}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
