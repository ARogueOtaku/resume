import Section from "@/components/visual/Section";
import COUNTRY_CODES from "@/constants/CountryCodes";
import useProfileDataSelector from "@/hooks/useProfileDataSelector";
import { useMemo } from "react";
import Detail from "@/components/visual/Detail";

function DetailsSection() {
  const address = useProfileDataSelector((profileData) => profileData.address);
  const email = useProfileDataSelector((profileData) => profileData.email);
  const phone = useProfileDataSelector((profileData) => profileData.phone);

  const addressTexts = useMemo<string[]>(
    () => address.map((adrs) => adrs.name),
    [address]
  );
  const emailText = useMemo<string[]>(() => [email], [email]);
  const phoneText = useMemo<string[]>(
    () => [`${COUNTRY_CODES[phone.country].dial_code}${phone.number}`],
    [phone]
  );

  return (
    <Section
      headerText="Details"
      id="details"
      content={
        <>
          <Detail headerText="Address" id="address" details={addressTexts} />
          <Detail headerText="Phone" id="phone" details={phoneText} />
          <Detail headerText="Email" id="email" details={emailText} />
        </>
      }
    />
  );
}

export default DetailsSection;
