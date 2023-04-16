interface TodoProps {
  tasklist: string[];
  onDelete: (index: number) => void;

}

const  Todo = ({ tasklist, onDelete }: TodoProps) =>{
  return (
    <div className="mt-5 mb-5 flex flex-col items-center justify-center font-serif text-[#e0def4]">
      {tasklist.map((task,index)  => (
        <div className="mt-6 flex items-center justify-center space-x-10 text-center ">
          <div className="bg-[#31748f] px-3 py-1 rounded text-2xl">{task}</div>
          <div className="bg-[#eb6f92] px-2 py-1  rounded text-sm hover:cursor-pointer" onClick={()=> onDelete(index)}>X</div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
