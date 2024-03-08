/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Contact({ listingProp }) {
  console.log(listingProp);
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listingProp.userRef}`);
        const data = await res.json();
        setLandlord(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listingProp.userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for <span>{listingProp.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here"
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?from=${currentUser.email}&subject=Regarding ${listingProp.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
