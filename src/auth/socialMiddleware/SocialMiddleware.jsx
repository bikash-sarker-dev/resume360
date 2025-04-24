import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import SectionHead from "../../components/header/section-head/SectionHead";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function SocialMiddleware() {
  const { setUser, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const [conditions, setConditions] = useState(false);
  const [profession, setProfession] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [userCheck, setUserCheck] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    setLoading(true);
    userFind();
    setLoading(false);
  }, []);

  async function userFind() {
    let person = await axiosPublic.get(`/users/${user.email}`);
    setUserCheck(person.data.result);
  }
  console.log(userCheck, user);
  if (user?.email === userCheck?.email) {
    navigate("/");
    setLoading(false);
    return;
  }
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setProfession(selectedValue);
    setShowInput(selectedValue === "others");
  };

  const handleSave = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const image = form.image.value;
    const email = form.email.value;
    const terms = true;

    const data = { name, profession, email, image, terms };
    console.log(data);

    axiosPublic.post("/users", data).then((res) => {
      if (res.data.message) {
        form.reset();
        Swal.fire({
          title: "Success",
          text: "successfully Updated Data",
          icon: "success",
          confirmButtonText: "Done",
          confirmButtonColor: "#3e563f",
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Error",
          text: "Data Update Unsuccessful",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#3e563f",
        });
      }
    });
  };
  return (
    <div className="card w-11/12 md:w-7/12 mx-auto">
      <div className="card-body">
        <SectionHead
          subTitle={"Some important information that is neeeded"}
          title={"Information Form"}
        />
        <form onSubmit={handleSave}>
          <fieldset className="fieldset">
            <label className="fieldset-label">Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                className="input w-full pr-10"
                placeholder="Enter Name"
                defaultValue={user.displayName}
                required
                readOnly
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                <i className="fa-solid fa-user"></i>
              </span>
            </div>

            <label className="fieldset-label">Profession</label>
            <select
              defaultValue="default"
              className="select select-bordered w-full"
              name="profession"
              required
              onChange={handleSelectChange}
            >
              <option disabled value="default">
                select profession
              </option>
              <option value="web developer">Web Developer</option>
              <option value="teacher">Teacher</option>
              <option value="ui/ux designer">UI/UX Designer</option>
              <option value="mechanical engineer">Mechanical Engineer</option>
              <option value="chemist">Chemist</option>
              <option value="others">Others</option>
            </select>

            {showInput && (
              <input
                type="text"
                className="input input-bordered w-full mt-2"
                placeholder="Enter your profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            )}

            <label className="fieldset-label">Image</label>
            <input
              type="text"
              name="image"
              className="input w-full pr-10"
              placeholder="Enter Your Image"
              defaultValue={user.photoURL}
              required
              readOnly
            />

            <label className="fieldset-label">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="input w-full pr-10"
                placeholder="Enter Your Email"
                defaultValue={user.email}
                required
                readOnly
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                <i className="fa-solid fa-envelope"></i>
              </span>
            </div>

            <div className="flex justify-between items-center mt-2">
              <label className="fieldset-label">
                <input
                  type="checkbox"
                  name="conditions"
                  value={conditions ? "true" : "false"}
                  className="checkbox"
                  onClick={() => setConditions(!conditions)}
                  required
                />{" "}
                I accept the Terms and Conditions
              </label>
            </div>
            {conditions ? (
              <>
                <button className="btn bg-r-accent mt-4 text-r-text hover:bg-r-primary hover:text-white">
                  Save
                </button>
              </>
            ) : (
              <>
                <button disabled className="btn bg-r-accent mt-4 text-r-text">
                  Save
                </button>
              </>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
}
