const ContactUs = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold  m-2 p-2">Contact Us Page </h1>
      <h2 className="text-lg font-bold m-2 p-2">Location : Pune </h2>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 rounded-lg">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
