import { motion } from "framer-motion"

const painPoints = [
  {
    painPointHeader: 'Gallery = MCDU dumpyard',
    painPointText: 'A gallery full of MCDU pictures 🙄, left to make sense using the date, time and roster ',
    // imagePath: '/images/wm-mcdu-gallery.jpg',
    imagePath: '/images/wm-physical-lb-w-mistakes.png',
    width: 'auto',
    height: '10',
    rotateAngle: 'rotate-[25deg]',
    emoji: 'wm_emoji_face_with_rolling_eyes.png', 
  },
  {
    painPointHeader: 'Unclean Data, Messy Logbook ',
    painPointText: '1 Mistake is all it takes, to make your logbook look like a 3rd graders drawing book 😠',
    imagePath: '/images/wm-physical-lb-w-mistakes.png',
    width: 'auto',
    height: 'auto',
    rotateAngle: 'rotate-[25deg]',
    emoji: 'wm-emoji-sob.png', 
  },
  {
    painPointHeader: 'Whitener explosion',
    painPointText: 'Who had the whitner party on your logbook? 😡 You-know-who does not like this ',
    imagePath: '/images/wm-whitener.png',
    width: 'auto',
    height: 'auto',
    rotateAngle: 'rotate-[35deg]',
    emoji: 'wm-emoji-rage.png', 
  },
  {
    painPointHeader: 'A frustrated pilot',
    painPointText: 'A pilot, who flies multi-million dollar equipment, still wasting time 😔',
    // imagePath: '/images/wm-frustrated-pilot-stroke.png',
    imagePath: '/images/wm-frustrated-pilot.png',
    width: '250px',
    height: 'auto',
    rotateAngle: 'rotate-[10deg]',
    emoji: 'wm-emoji-weary.png', 
  }
]

export default function WingmanProductPainpointReveal() {
    return (
        <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center justify-center"
                >

                    <div className="text-center space-y-4 pb-20">
                        <h2 className="text-sm text-blue-500 font-mono font-semibold tracking-wider uppercase">
                        When you do your logbook
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold lowercase tracking-tighter leading-tight text-gray-900">
                            <div>
                            does this feel familiar?
                            </div>
                        </h3>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {painPoints.map((
                            painPoint: { 
                                painPointHeader: string, 
                                painPointText: string, 
                                imagePath: string, 
                                width: string, 
                                height: string,
                                rotateAngle: string, 
                                emoji: string
                            }, 
                            i: number
                            ) => (
                            <motion.div
                                // className="rounded-lg bg-gradient-to-b from-red-500/90 to-red-500"
                                className="group rounded-lg bg-gradient-to-b from-white to-gray-50 hover:shadow-xl hover:shadow-red-300 border-2 hover:border-red-500"
                                key={i}
                                initial={{ opacity: 0, y: 40, rotate: '-5deg' }}
                                whileInView={{ opacity: 1, y: 0, rotate: '0deg' }}
                                transition={{ delay: i * 0.5 }}
                            >                                    

                                <div className="min-w-[200px] max-w-[250px] flex flex-col items-center">                                                                        
                                    <img 
                                        src={`/images/emojis/${painPoint.emoji}`} 
                                        alt="emoji"                                        
                                        className="absolute object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-[250px] w-[60px] h-auto" 
                                    />

                                    <motion.div
                                        className="-mt-20"
                                        whileHover={{ scale: 1 }}
                                        initial={{ scale: 0.95 }}
                                    >                                        
                                        <img 
                                            className={`group-hover:scale-110 transition durtion-300 ${painPoint.rotateAngle} group-hover:rotate-[0deg]`}
                                            src={painPoint.imagePath} 
                                            alt={painPoint.painPointHeader}
                                            height={painPoint.height}
                                            width={painPoint.width}                                            
                                        />                                        
                                    </motion.div>
                                    <motion.p
                                        className="text-gray-300 group-hover:text-red-500 text-center font-bold p-5 font-caveat text-2xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                    >
                                        {painPoint.painPointHeader}
                                    </motion.p>
                                    <motion.p
                                        className="text-center px-6 py-8 text-dark text-sm"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                    >
                                        {painPoint.painPointText}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                        
                    <div className="bg-white shadow rounded-lg px-2 py-2 max-w-2xl mt-10">
                        <p className="text-2xl mt-10 text-gray-500 max-w-2xl">
                            In a survey done by EAA, 80% of pilots admit they <span className="font-bold underline underline-offset-4">procrastinate</span> or <span className="font-bold underline underline-offset-4">avoid</span> updating their logbooks regularly.                     
                        </p>
                    
                        <div className="flex justify-center items-center mt-5 mb-3">
                            <img 
                                src="https://www.kitplanes.com/uploads/2019/05/EAA_logo_300-1.png" 
                                alt="EAA Logo" 
                                className="w-28 h-auto"
                            />
                        </div>
                    </div>                            
                
        </motion.div>
    )
}