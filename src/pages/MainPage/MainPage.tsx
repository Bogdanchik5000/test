import {
  FeaturesSection,
  InviteSection,
  JoinGameSection,
  WarningSection,
} from "../../components/shared";

export function MainPage() {
  return (
    <>
      <WarningSection />
      <InviteSection />
      <JoinGameSection />
      <FeaturesSection />
    </>
  );
}
