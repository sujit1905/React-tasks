import React, { useState } from "react";

function Note() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [task, setTask] = useState([]);
  const submitting = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, des });

    setTask(copyTask);

    setTitle("");
    setDes("");
    console.log(task);
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  };
  return (
    <div className="bg-black text-white h-screen ">
      <div className="main flex p-5 w-3/3 gap-20 lg: ">
        <div className="createNotes border-r-4 pr-11">
          <h1 className="text-5xl">Create Note</h1>
          <form
            action=""
            className="inputs flex flex-col gap-10 mt-4 "
            onSubmit={(e) => {
              submitting(e);
            }}
          >
            <input
              type="text"
              placeholder="Enter Your Task:"
              className="text-3xl border-2 rounded p-3 mt-2"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              name=""
              id=""
              className="text-3xl border-2 rounded h-50"
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            ></textarea>
            <button className="border-2 rounded h-10 active:scale-101">
              Create
            </button>
          </form>
        </div>
        <div className="recentNotes overflow-auto h-193 ">
          <h1 className="text-5xl">Recent Notes</h1>
          <div className="flex flex-wrap ">
            {task.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="relative p-6 pt-15  h-72 w-72 bg-no-repeat bg-contain bg-center mt-6 flex flex-col gap-3 overflow-hidden bg-[url(https://www.pngall.com/wp-content/uploads/5/Sticky-Notes-PNG-File-Download-Free.png)]"
                >
                  <h3 className=" text-black text-2xl font-bold break-words overflow-hidden line-clamp-2">
                    {elem.title}
                  </h3>

                  <p className=" text-sm  text-gray-700 font-semibold break-words overflow-hidden line-clamp-5  ">
                    {elem.des}
                  </p>
                  <button
                    className="bg-red-600 rounded mt-auto"
                    onClick={() => deleteNote(idx)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
