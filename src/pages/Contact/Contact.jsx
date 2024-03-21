import image1 from "../../assets/img/icons-phone.svg";
import image2 from "../../assets/img/icons-mail.svg";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div className="w-[90%] flex p-[60px_0px] flex-col gap-[40px] m-auto sm:p-[20px]">
      <div className="">
        <h1 className="text-[20px] font-[500]">
          <Link to={"/"}>
            <span className="text-[20px] text-[gray]">Home / </span>
          </Link>
          Contact
        </h1>
      </div>
      <div className="flex items-center gap-[40px] sm:flex sm:flex-col ">
        <div className="shadow-[0px_8px_24px_0px_rgba(0,_0,_0,_0.16)] p-[40px] rounded-[4px]">
          <div className="border-b-[2px] border-[#717171] pt-[10px] pb-[30px]">
            <div className="flex items-center gap-[20px]">
              <img src={image1} alt="" />
              <h1 className="text-[25px] font-[400]">Call To Us</h1>
            </div>
            <h1 className="text-[18px] pt-[10px]">
              We are available 24/7, 7 days a week.
            </h1>
            <h1 className="text-[18px] pt-[10px]">Phone: +8801611112222</h1>
          </div>
          <div className=" pt-[10px] pb-[10px] mt-[30px]">
            <div className="flex items-center gap-[20px]">
              <img src={image2} alt="" />
              <h1 className="text-[25px] font-[400]">Write To US</h1>
            </div>
            <h1 className="text-[18px] w-[300px] pt-[20px]">
              Fill out our form and we will contact you within 24 hours.
            </h1>
            <h1 className="text-[18px] pt-[10px]">
              Emails: customer@exclusive.com
            </h1>
            <h1 className="text-[18px] pt-[10px]">
              Emails: support@exclusive.com
            </h1>
          </div>
        </div>
        <div className="p-[40px] shadow-[0px_8px_24px_0px_rgba(0,_0,_0,_0.16)] flex flex-col gap-[32px] rounded-[4px] sm:p-[20px_16px]">
          <div className="flex gap-[20px] items-center sm:flex-col ">
            <input
              placeholder="Name"
              className="w-[31%] text-[20px] border-[#959595] text-[gray] pl-[10px] rounded-lg h-[55px] border-[2px] bg-[transparent] outline-none sm:w-[300px]"
              type="text"
            />
            <input
              placeholder="Email"
              className="w-[31%] text-[20px] border-[#959595] text-[gray] pl-[10px] rounded-lg h-[55px] border-[2px] bg-[transparent] outline-none sm:w-[300px]"
              type="text"
            />
            <input
              placeholder="Phone"
              className="w-[31%] text-[20px] border-[#959595] text-[gray] pl-[10px] rounded-lg h-[55px] border-[2px] bg-[transparent] outline-none sm:w-[300px]"
              type="text"
            />
          </div>
          <div className="flex justify-center">
            <textarea
              placeholder="Your Massage"
              className="w-[100%] bg-[transparent] h-[30vh] border-[#959595] rounded-lg text-[20px] text-[gray] outline-none p-[10px] border-[2px] sm:w-[300px]"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="text-end">
            <button className="bg-red-500 hover:bg-red-700 text-[white] w-[200px] h-[55px] text-[18px] rounded-md sm:ml-[140px]  ml-[567px]">
              Send Massage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
