import React from "react";
import {
  ItemsContainer,
  ItemsFlex,
  Item,
  Logo,
  Text,
} from "../../styles/components/data/items";
import Link from "next/link";

function Items({ theme }) {
  return (
    <ItemsContainer>
      <div className="container-inside">
        <ItemsFlex>
          <Link href="data/sanity">
            <Item>
              <Logo
                src={`images/icons/${
                  theme == "dark"
                    ? "sanity-dark-theme.svg"
                    : "sanity-light-theme.svg"
                }`}
              ></Logo>
              <Text>
                Highly versatile and adaptable platform for structured content.
              </Text>
            </Item>
          </Link>
          <Link href="data/datocms">
            <Item>
              <Logo
                src={`images/icons/${
                  theme == "dark"
                    ? "dato-dark-theme.svg"
                    : "dato-light-theme.svg"
                }`}
              ></Logo>
              <Text>The API-based CMS with a customizable interface.</Text>
            </Item>
          </Link>
          <Link href="data/contentful">
            <Item>
              <Logo
                className="logo-data-big"
                src={`images/icons/${
                  theme == "dark"
                    ? "storyblok-dark-theme.svg"
                    : "storyblok-light-theme.svg"
                }`}
              ></Logo>
              <Text>
                API-first, cloud-native SaaS for complex and diverse business needs.
              </Text>
            </Item>
          </Link>
          <Link href="data/strapi">
            <Item>
              <Logo
                src={`images/icons/${
                  theme == "dark"
                    ? "strapi-dark-theme.svg"
                    : "strapi-light-theme.svg"
                }`}
              ></Logo>
              <Text>
                Open source Node.js Headless CMS to easily build customisable
                APIs.
              </Text>
            </Item>
          </Link>
        </ItemsFlex>
      </div>
    </ItemsContainer>
  );
}

export default Items;
