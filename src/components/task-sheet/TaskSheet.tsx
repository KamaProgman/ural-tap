import React, { Dispatch, SetStateAction } from 'react'
import Badge from '../ui/badge/Badge'
import Button from '../ui/button/Button'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion";
import sparkles from "../../assets/sparkles.svg"
import { Task } from '../../types/tasks';

interface props {
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
  task: Task
  onComplete: () => void
}

const TaskSheet: React.FC<props> = ({ isShow, setIsShow, task, onComplete }) => {
  return (
    <AnimatePresence>
      {isShow && (
        <>
          <motion.div
            className='wrapper w-full h-full bg-[#090c1a80] absolute left-0 top-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsShow(false)}
          />

          <motion.div
            className='gradient_sheet w-full h-1/2 py-8 px-5 rounded-t-2xl absolute bottom-0 left-0 z-50'
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className='h-full flex flex-col items-center justify-between'>
              <div className="w-[72px] h-[72px] rounded-full gradient_btn flex items-center justify-center">
                {task.image && <img src={task.image?.url} alt="task" className='w-11' />}
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">{task.title}</h3>
                <p className="text-sm text-secondary">{task.description}</p>
              </div>

              <Badge>
                <img src={sparkles} alt="sparkles" className="w-6 h-6" />
                {task.reward.toLocaleString()}
              </Badge>

              <Button
                className='px-7'
                onClick={onComplete}>
                Выполнить
              </Button>
            </div>

            <button
              className='absolute right-5 top-5'
              onClick={(e) => {
                setIsShow(false)
                e.stopPropagation()
              }}>
              <X className='w-6 text-primary' />
            </button>
          </motion.div>
        </>
      )
      }
    </AnimatePresence >
  )
}

export default TaskSheet