import { RxCross2 } from "react-icons/rx";

const AddBlogForm = ({ setAddFormVisible }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg">
        <div className=" flex justify-between items-center">
          <h2 className="capitalize text-xl text-primary font-semibold mb-4">
            Add new blog
          </h2>
          <div
            onClick={() => setAddFormVisible(false)}
            className="text-tomato text-2xl font-bold cursor-pointer"
          >
            <RxCross2 className="text-error font-semibold" />
          </div>
        </div>

        {/* Image upload */}
        {/* <ImageUpload image={image} setImage={setImage} /> */}

        {/* Modal Content */}
        {/* <form onSubmit={handleAddBlog} className="w-full"> */}
        {/* <SelectField
              label={"Category"}
              labelId={"category"}
              name={"category"}
              options={blogCategories}
              required={true}
            /> */}
        {/* <MuiInputField
              label="Blog Title"
              type="text"
              name="title"
              required={true}
            /> */}

        {/* <QuillDescription content={content} setContent={setContent} /> */}

        {/* Button submit */}
        {/* <SubmitButton isLoading={isLoading} title={"Add blog"} /> */}
        {/* </form> */}
      </div>
    </div>
  );
};

export default AddBlogForm;
