export default function HorizontalMenu({ horiVisible, setHoriVisible} : 
    {setHoriVisible: React.Dispatch<React.SetStateAction<boolean>> ,
      horiVisible: boolean
    }) {
    return (
      <div 
      onClick={e => {
        e.stopPropagation();
        setHoriVisible(!horiVisible)
      }}
      className="sm:hidden z-50 cursor-default w-16 h-12 flex-col border-4 border-slate-700 rounded-md my-2 mx-5 flex justify-center p-2 bg-white">
        <div >

            <div className={`transition-all duration-300 w-auto h-2 bg-slate-700 my-1 rounded ${!horiVisible ? '' : 
            'translate-y-1.5 translate-x-0 rotate-45'
             }`}></div>
            <div className={` transition-all duration-300 w-auto h-2 bg-slate-700 my-1 rounded ${!horiVisible ? '' : 
            '-translate-y-1.5 rotate-[-45deg]' }`}></div>

        </div>
      </div>
    );
  }
  