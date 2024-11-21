import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.6 }}
        className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
      >
        <LeftSide />
      </motion.div>
      <div className="mx-auto p-4">Middle</div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.6 }}
        className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightSide />
      </motion.div>
    </div>
  );
}
