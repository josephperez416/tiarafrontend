import { Typography } from "@mui/material";

function PinkBoxComponent() {
  return (
    <div
      style={{
        backgroundColor: "#952d6d",
        width: "33.75%",
        height: "100vh",
        float: "left",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ color: "#ffffff", width: "85%" }}>
        <img
          src="https://s3-alpha-sig.figma.com/img/b1c9/e1d5/b43beba7fff90f608fc19bafa31dc1ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eD3UihaTxPKkrs-ZkVNV7dsrroKxdo7fQJDBT7nll~jSKFgeQcIWWsxKF888EIrVPkbn1uWIPhb4lMk0AJwZ-d~8LoOYDotA2E2E3jHUuoTpUjURHAwoOepCHE2yM0NoPyx9eC6jHLhTxw5P4aRie6qiPNPLlctvbZhXYkBuci1drz-YXsk3~txi8xD39-RCea2MeR9Rq2HskrkILsemiLAw81aF7MC-xnrn86PJ3-QxW3aIvoC86ltja485hj0RKiFtqa6-KxRfAxTWnLl9FZ72rLDf5CiKjKNUMoLwFaeyB4iCF0mUCTU5J7fiqzSGqBdNf--R8g4~GzwAtR5ksQ__"
          alt="logo_MiTiara"
          style={{ filter: "brightness(0) invert(1)", width: "60%" }}
        />
        <Typography variant="h2">
          Transforming Your Plans into Celebrations!
        </Typography>
      </div>
    </div>
  );
}

export default PinkBoxComponent;
