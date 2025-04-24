import Swal from "sweetalert2";
import SectionHead from "../../components/header/section-head/SectionHead";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function GiveReview() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  console.log(user);

  const handleCreateReview = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const profession = form.profession.value;
    const review = form.review.value;
    const rate = form.rating.value;
    const rating = parseFloat(rate);
    const newReview = {
      name,
      email,
      profession,
      review,
      rating,
      image: user?.photoURL,
    };
    console.log(newReview);
    try {
      const res = await axiosPublic.post(`/reviews`, newReview);
      console.log(res.data);
      if (res.data.status === 200) {
        Swal.fire({
          title: "Success",
          text: res.data?.message,
          icon: "success",
          confirmButtonColor: "#3e563f",
          confirmButtonText: "ok",
          background: "#d5dfd9",
        });
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" bg-r-card rounded-xl p-10">
        <SectionHead
          subTitle={
            "It is a dedicated area where user can give a review and rating."
          }
        />

        <form onSubmit={handleCreateReview}>
          <div className="mt-6">
            <div className="md:w-10/12 lg:w-8/12 mx-auto">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Name</span>
                </div>
                <input
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Enter Your Name*"
                  name="name"
                  className="input w-full"
                  required
                  readOnly
                ></input>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <div className="md:w-10/12 lg:w-8/12 mx-auto">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Email</span>
                </div>
                <input
                  defaultValue={user?.email}
                  type="text"
                  placeholder="Enter Your Email*"
                  name="email"
                  className="input w-full"
                  required
                  readOnly
                ></input>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <div className="md:w-10/12 lg:w-8/12 mx-auto">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Profession</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your profession*"
                  name="profession"
                  className="input w-full"
                  required
                ></input>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <div className="md:w-10/12 lg:w-8/12 mx-auto">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Review</span>
                </div>
                <textarea
                  type="text"
                  placeholder="Enter Review*"
                  name="review"
                  className="textarea w-full"
                  required
                ></textarea>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <div className="md:w-10/12 lg:w-8/12 mx-auto">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-bold">Rating</span>
                </div>
                <select
                  defaultValue="Select the Rating"
                  className="select w-full"
                  name="rating"
                >
                  <option disabled={true}>Select the Rating</option>
                  <option className="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>
          </div>
          <div className="mt-6 text-center">
            <input
              type="submit"
              value="Submit A Review"
              className="btn font-bold md:w-10/12 lg:w-8/12 bg-r-accent text-r-text hover:bg-r-primary hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
