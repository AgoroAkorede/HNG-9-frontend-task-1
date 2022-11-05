import LinkCard from "../link-card/link-card";
import "./content.scss";
import {Link} from "react-router-dom"

const Content = () => {
  const ListofLinks = [
    {
      id: "twitter",
      name: " Agoro Akorede",
      link: "https://twitter.com/AkoredeAgoro",
    },
    { id: "btn__zuri", name: "Zuri Team", link: "https://training.zuri.team/" },
    { id: "books", name: "Zuri Books", link: "https://books.zuri.team/" },
    {
      id: "book__python",
      name: "Python Books",
      link: "https://training.zuri.team/",
    },
    {
      id: "pitch",
      name: "Background Check for Coders",
      link: "https://background.zuri.team",
    },
    {
      id: "btn__zuri",
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
    },
    // {
    //   id: "btn_contact",
    //   name: "Contact",
    // },
  ];

  return (
    <div className="content">
      {ListofLinks.map((item) => (
        <LinkCard linkName={item.name} url={item.link} id={item.id} />
      ))}
      <Link to="/contact">
        <LinkCard linkName="Contact" />
      </Link>
    </div>
  );
};

export default Content;
