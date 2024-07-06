import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import { CheckCircle } from "@mui/icons-material";
import theme from "@/theme";

interface PremiumProps {
  membershipStatus: string;
}

const Premium: React.FC<PremiumProps> = ({ membershipStatus }) => {
  const isActive = membershipStatus === "ACTIVE";

  const benefitImages = [
    "https://i.pinimg.com/564x/af/a8/8f/afa88f97b37a9e8c7e3d73964452a0e5.jpg",
    "https://i.pinimg.com/564x/69/6d/16/696d1605229c2a16abba80b8f70167f9.jpg",
    "https://i.pinimg.com/564x/0b/b0/7e/0bb07ee1aec87be31e0b9231e0e6ff68.jpg",
    "https://i.pinimg.com/564x/db/9e/d6/db9ed6bc70be744e1a048dac50582d1b.jpg",
    "https://i.pinimg.com/564x/92/04/a2/9204a2521796e523576c4308b0199c35.jpg",
    "https://i.pinimg.com/564x/3e/16/10/3e16108263083f94b37bbae33f0c6a37.jpg",
  ];

  const incentiveImages = [
    "https://i.pinimg.com/564x/af/a8/8f/afa88f97b37a9e8c7e3d73964452a0e5.jpg",
    "https://i.pinimg.com/564x/69/6d/16/696d1605229c2a16abba80b8f70167f9.jpg",
    "https://i.pinimg.com/564x/0b/b0/7e/0bb07ee1aec87be31e0b9231e0e6ff68.jpg",
    "https://i.pinimg.com/564x/db/9e/d6/db9ed6bc70be744e1a048dac50582d1b.jpg",
    "https://i.pinimg.com/564x/92/04/a2/9204a2521796e523576c4308b0199c35.jpg",
    "https://i.pinimg.com/564x/3e/16/10/3e16108263083f94b37bbae33f0c6a37.jpg",
  ];

  return (
    <Card className="mx-auto ">
      <div className="relative w-full h-52 m-3">
        <Image
          className="object-cover"
          src="https://i.pinimg.com/564x/52/1a/81/521a8191d221f2465fe9dca78cef19b3.jpg"
          alt="Membership status"
          layout="fill"
        />
      </div>
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          color="primary"
          className="text-3xl font-medium text-center"
        >
          {isActive
            ? "¡Ya eres miembro!"
            : "Casi eres parte de una comunidad exclusiva"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isActive ? (
            <div>
              <p className="text-md">
                ¡Felicitaciones! Como miembro activo, disfrutas de los
                siguientes beneficios:
              </p>
              <div className="mx-5">
                <ul className="list-disc list-inside py-1">
                  <li className="flex items-center py-1">
                    <CheckCircle
                      className="mr-2"
                      style={{ color: theme.palette.primary.main }}
                    />
                    10% de descuento en todas tus reservaciones
                  </li>
                  <li className="flex items-center  py-1">
                    <CheckCircle
                      className="mr-2"
                      style={{ color: theme.palette.primary.main }}
                    />
                    Pase para hacer snorkel y buceo para ti y tu acompañante
                  </li>
                  <li className="flex items-center  py-1">
                    <CheckCircle
                      className="mr-2"
                      style={{ color: theme.palette.primary.main }}
                    />
                    Soporte prioritario 24h
                  </li>
                  <li className="flex items-center  py-1">
                    <CheckCircle
                      className="mr-2"
                      style={{ color: theme.palette.primary.main }}
                    />
                    Y mucho más...
                  </li>
                </ul>
              </div>

              <Grid container spacing={2} className="mt-4">
                {benefitImages.map((image, index) => (
                  <Grid item xs={4} key={index}>
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="relative w-full h-36">
                        <Image
                          className="object-cover transform transition-transform duration-300 hover:scale-105"
                          src={image}
                          alt={`Benefit ${index + 1}`}
                          layout="fill"
                        />
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : (
            <div>
              <p>
                Estás muy cerca de ser parte de una comunidad exclusiva donde
                podrás disfrutar de:
              </p>
              <div className="mx-5">
                <ul className="list-disc list-inside py-1">
                  <li className="flex items-center py-1">
                    <CheckCircle
                      className="mr-2"
                      style={{ color: theme.palette.primary.main }}
                    />
                    10% de descuento en todas tus reservaciones
                  </li>
                  <li className="flex items-center  py-1">
                    <CheckCircle
                      className="mr-2"
                      style={{ color: theme.palette.primary.main }}
                    />
                    Pase para hacer snorkel y buceo para ti y tu acompañante
                  </li>
                  <li className="flex items-center  py-1">
                    <CheckCircle
                      className="mr-2"
                      style={{ color: theme.palette.primary.main }}
                    />
                    Soporte prioritario 24h
                  </li>
                  <li className="flex items-center  py-1">
                    <CheckCircle
                      className="mr-2"
                      style={{ color: theme.palette.primary.main }}
                    />
                    Y mucho más...
                  </li>
                </ul>
              </div>
              <div className="text-center mt-4">
                <Button variant="contained" color="primary" disabled>
                  Activar Membresía
                </Button>
              </div>
              <Grid container spacing={2} className="mt-4">
                {incentiveImages.map((image, index) => (
                  <Grid item xs={4} key={index}>
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="relative w-full h-36">
                        <Image
                          className="object-cover transform transition-transform duration-300 hover:scale-105"
                          src={image}
                          alt={`Incentive ${index + 1}`}
                          layout="fill"
                        />
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Premium;
