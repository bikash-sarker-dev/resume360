import SectionHead from "../../components/header/section-head/SectionHead";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function GiveReview() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleCreateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const profession = form.profession.value;
    const review = form.review.value;
    const rate = form.rate.value;
    const rating = parseFloat(rate);
    const newReview = {
      name,
      email,
      profession,
      review,
      rating,
    };
    console.log(newReview);
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
                <input
                  type="number"
                  placeholder="Enter Rating*"
                  name="rate"
                  className="input input-bordered w-full"
                />
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
