import DeleteIcon from "@mui/icons-material/Delete";
import css from "./ContactList.module.css";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, del }) => {
  const deleteId = (Id) => {
    del(Id);
  };

  return (
    <div>
      <ul>
        {contacts?.map(({ name, number, id }) => {
          return (
            <div className={css["container-contact"]} key={id}>
              <li>
                {name}: {number}
              </li>
              <IconButton
                className={css["delete-contact"]}
                data-id={id}
                onClick={() => deleteId(id)}
                edge="end"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  del: PropTypes.func,
};
