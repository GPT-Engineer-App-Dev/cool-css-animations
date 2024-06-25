import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState('pulse');

  const sections = [
    { id: 'pulse', title: 'Pulse Animation' },
    { id: 'rotate', title: 'Rotate Animation' },
    { id: 'scale', title: 'Scale Animation' },
    { id: 'slide', title: 'Slide Animation' },
    { id: 'bounce', title: 'Bounce Animation' },
    { id: 'fade', title: 'Fade Animation' },
    { id: 'flip', title: 'Flip Animation' },
    { id: 'wobble', title: 'Wobble Animation' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
        <ul className="flex justify-center space-x-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Button
                variant={activeSection === section.id ? "default" : "outline"}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container mx-auto px-4 py-8 overflow-hidden">
        {activeSection === 'pulse' && (
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-purple-600">Pulse Animation</h2>
            <p className="text-gray-700 text-center">This element pulses continuously, drawing attention to its content.</p>
          </motion.div>
        )}

        {activeSection === 'rotate' && (
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-pink-600">Rotate Animation</h2>
            <p className="text-gray-700 text-center">This element rotates continuously, creating an interesting visual effect.</p>
          </motion.div>
        )}

        {activeSection === 'scale' && (
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 mb-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-red-600">Scale Animation</h2>
            <p className="text-gray-700 text-center">Hover over or tap this element to see it scale up and down.</p>
          </motion.div>
        )}

        {activeSection === 'slide' && (
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 mb-8"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-green-600">Slide Animation</h2>
            <p className="text-gray-700 text-center">This element slides in from the left when it appears.</p>
          </motion.div>
        )}

        {activeSection === 'bounce' && (
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 mb-8"
            animate={{ y: ['0%', '-20%', '0%'] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Bounce Animation</h2>
            <p className="text-gray-700 text-center">This element bounces up and down continuously.</p>
          </motion.div>
        )}

        {activeSection === 'fade' && (
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-600">Fade Animation</h2>
            <p className="text-gray-700 text-center">This element fades in and out continuously.</p>
          </motion.div>
        )}

        {activeSection === 'flip' && (
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 mb-8"
            animate={{ rotateY: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-teal-600">Flip Animation</h2>
            <p className="text-gray-700 text-center">This element flips continuously, creating a dynamic visual effect.</p>
          </motion.div>
        )}

        {activeSection === 'wobble' && (
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 mb-8"
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">Wobble Animation</h2>
            <p className="text-gray-700 text-center">This element wobbles continuously, adding a playful touch.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;