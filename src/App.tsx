import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteLayout } from './layouts/SiteLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Clients } from './pages/Clients'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route element={<SiteLayout />}>
          <Route
            index
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="about"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="products"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Products />
              </motion.div>
            }
          />
          <Route
            path="clients"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Clients />
              </motion.div>
            }
          />
          <Route
            path="contact"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
