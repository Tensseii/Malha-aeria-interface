import React from "react";
import { Container, Typography } from "@mui/material";
import TextInput from "../components/TextInput/TextInput";
import Row from "../components/Row/Row";
import Card from "../components/Card/Card";
import { useIndex } from "../data/hooks/useIndex";
import { CircularProgress } from "@mui/material";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import Button from "../components/Button/Button";
import { ApiService } from "../data/services/apiServiceB";
export default function Search() {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    loading,
    searchDone,
    sendCities,
    routes,
    message,
    purchaseRoute,
  } = useIndex(ApiService);

  return (
    <Container
      sx={{
        alignItems: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row>
        <TextInput
          value={origin}
          variant="outlined"
          label="Origem"
          onChange={(event) => setOrigin(event.target.value)}
          color="info"
        ></TextInput>
        <TextInput
          value={destination}
          variant="outlined"
          label="Destino"
          onChange={(event) => setDestination(event.target.value)}
          color="info"
        ></TextInput>
        <Button
          disabled={loading}
          color="info"
          variant="contained"
          sx={{ minWidth: "9.4vw" }}
          onClick={() => {
            sendCities(origin, destination);
          }}
        >
          ENVIAR
        </Button>
      </Row>
      {message != null && (
        <Typography
          color={message.status}
          fontSize={"28px"}
          sx={{ alignSelf: "center" }}
        >
          {message.text}
        </Typography>
      )}
      <Card data-color="#0288d1">
        {loading && (
          <CircularProgress
            color="info"
            size="10rem"
            sx={{ alignSelf: "center", margin: "auto" }}
          />
        )}
        {searchDone && (
          <List>
            {routes.map((route, index) => (
              <ListItem
                color="info"
                secondColor="#7eaee1"
                route={route}
                key={index}
                onClick={purchaseRoute}
              />
            ))}
          </List>
        )}
      </Card>
    </Container>
  );
}
