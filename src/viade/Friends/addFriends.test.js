import { cleanup } from "@testing-library/react";
import AddFriend from "./addFriend";
import "@testing-library/jest-dom";
jest.setTimeout(30000);

describe.only("Add friends", () => {

  afterAll(cleanup);
  it("object created correctly", () => {
    expect(AddFriend).toBeTruthy();
  });

  it("add friend correctly", async () => {
    expect(AddFriend.addFriend("https://marshall6399.solid.community/profile/card#me", "https://marcialrprueba.solid.community/profile/card#me", "d", "d", "d")).toBeDefined();
  });

  it("object created correctly", async () => {
    expect(AddFriend.friendAlreadyAdded("https://marshall6399.solid.community/profile/card#me", "https://marcialrprueba.solid.community/profile/card#me")).toBeTruthy();
  });

  it("object created correctly", async () => {
    expect(AddFriend.removeFriend("https://marshall6399.solid.community/profile/card#me", "https://marcialrprueba.solid.community/profile/card#me", "d", "d")).toBeTruthy();
  });
});