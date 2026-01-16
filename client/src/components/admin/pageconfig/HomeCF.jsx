import { useState } from "react";

const HomeCF = () => {
  const [form0, setForm0] = useState({
    banner: [{ title: "", banner_img: "" }],
    about: { title: "", desc: "", video: "" },
    intro_app: { img: "", title: "", benefits: [""] },
    commitment: {
      title: "",
      desc: "",
      cards: [{ icon: "", title: "", desc: "" }],
    },
  });

  const updateField = (path, value) => {
    setForm0((prev) => {
      const copy = structuredClone(prev);
      let ref = copy;
      for (let i = 0; i < path.length - 1; i++) {
        ref = ref[path[i]];
      }
      ref[path[path.length - 1]] = value;
      return copy;
    });
  };
  //
  const [form, setForm] = useState({
    banner: { title: "", img: "" },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <h1>homepage config</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="text-sm font-medium  ">
            Title
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/2 focus:outline-none transition"
            type="text"
            placeholder="title..."
            value={form.banner.title}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                banner: {
                  ...prev.banner,
                  title: e.target.value,
                },
              }))
            }
          />
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500/2 focus:outline-none transition"
            placeholder="desc..."
            value={form.banner.img}

         />
         <input type="text" />
          <button type="submit" className="px-4 py-3 border-gray-500 border rounded-lg">Submit</button>
        </form>
      </div>
    </>
  );
};
export default HomeCF;
