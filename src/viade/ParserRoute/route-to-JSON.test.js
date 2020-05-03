import React from "react";
import { cleanup, screen } from "@testing-library/react";
import createJson from "./route-to-JSON";
import "@testing-library/jest-dom";

describe.only("Parser from rote to JSON file", () => {
  afterAll(cleanup);

  it("object created correctly", () => {
    expect(createJson).toBeTruthy();
  });

  it("given a correct route, it generates a file 1 video 1 photo", async () => {
    let name = "testRoute";
    let markers = [
      {
        lat: 43.36543771939589,
        lng: -5.855669975280762,
      },
      {
        lat: 43.36153772109785,
        lng: -5.859575271606445,
      },
      {
        lat: 43.35673257848257,
        lng: -5.856785774230958,
      },
    ];

    let images = ["https://marshall6399.solid.community/viade/resources/20140920_092712934_iOS.jpg"];
    let videos = ["https://marshall6399.solid.community/viade/resources/20140920_092712934_iOS.jpg"];
    let webId = "test";

    await createJson.createJson(name, markers, images, videos, webId);
  });

  it("given a correct route, it generates a file 1 video", async () => {
    let name = "testRoute";
    let markers = [
      {
        lat: 43.36543771939589,
        lng: -5.855669975280762,
      },
      {
        lat: 43.36153772109785,
        lng: -5.859575271606445,
      },
      {
        lat: 43.35673257848257,
        lng: -5.856785774230958,
      },
    ];

    let images = [];
    let videos = ["https://marshall6399.solid.community/viade/resources/20140920_092712934_iOS.jpg", "https://marshall6399.solid.community/viade/resources/20140920_092712934_iOS.jpg"];
    let webId = "test";

    await createJson.createJson(name, markers, images, videos, webId);
  });

  it("given a correct route, it generates a file 1 photo", async () => {
    let name = "testRoute";
    let markers = [
      {
        lat: 43.36543771939589,
        lng: -5.855669975280762,
      },
      {
        lat: 43.36153772109785,
        lng: -5.859575271606445,
      },
      {
        lat: 43.35673257848257,
        lng: -5.856785774230958,
      },
    ];

    let images = ["https://marshall6399.solid.community/viade/resources/20140920_092712934_iOS.jpg" ,"https://marshall6399.solid.community/viade/resources/20140920_092712934_iOS.jpg"];
    let videos = ["https://marshall6399.solid.community/viade/resources/20140920_092712934_iOS.jpg" ,"https://marshall6399.solid.community/viade/resources/20140920_092712934_iOS.jpg"];
    let webId = "test";

    await createJson.createJson(name, markers, images, videos, webId);
  });
});
