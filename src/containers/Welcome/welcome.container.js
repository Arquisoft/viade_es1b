import React from "react";
import { WelcomePageContent } from "./welcome.component";
const defaultProfilePhoto = "/img/icon/empty-profile.svg";

/**
 * Container component for the Welcome Page, containing example of how to fetch data from a POD
 */
export class WelcomeComponent extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image: defaultProfilePhoto,
      isLoading: false,
      hasImage: false,
    };
  }

  render() {
    const { webId } = this.props;
    return (
      <WelcomePageContent
        {...{ webId }}
      />
    );
  }
}
