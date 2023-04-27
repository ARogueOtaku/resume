import Section from "@/components/visual/Section";
import useProfileDataSelector from "@/hooks/useProfileDataSelector";
import { Fragment } from "react";

function HobbiesSection() {
  const hobbies = useProfileDataSelector((profileData) => profileData.hobbies);

  return (
    <Section
      headerText="Hobbies"
      id="hobbies"
      content={
        <div className="mt-4 text-sm">
          {hobbies.map((hobby, idx) => {
            return (
              <Fragment key={idx}>
                {idx !== 0 && ", "}
                <span>{hobby}</span>
              </Fragment>
            );
          })}
        </div>
      }
    />
  );
}

export default HobbiesSection;
