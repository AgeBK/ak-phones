import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  DataProps,
  PhoneProps,
  SearchChangeProps,
} from "@/app/lib/definitions";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import Img from "./image";
import styles from "@/app/css/Search.module.css";

export default function Search({ data }: DataProps) {
  const [overlay, setOverlay] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { replace } = useRouter();

  if (data) {
    // data used by the auto complete component
    const ACData = data.map(
      ({ title, modelid, brand, image, price }: PhoneProps) => {
        return { title, modelid, brand, image, price };
      },
    );

    const handleClick = (): void => setOverlay(true); // apply overlay when auto complete is focused

    const handleBlur = (): void => setOverlay(false); // remove overlay

    const handleChange = (
      _: SyntheticEvent<Element, Event>,
      val: SearchChangeProps,
    ): void => {
      if (val) {
        const { brand, modelid } = val;
        setOverlay(false);
        setOpen(false);
        replace(`/${brand}/${modelid}`);
      }
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLDivElement> & {
        defaultMuiPrevented?: boolean | undefined;
      },
    ): void => {
      const { key } = e;
      if (key === "Enter" && searchTerm) {
        // if Enter pressed, display results on category page
        setOverlay(false);
        setOpen(false);
        replace(`/search=${searchTerm}`);
      }
    };

    const handleInputChange = (
      _: SyntheticEvent<Element, Event>,
      val: string,
    ): void => {
      console.log("handleInputChange: " + val);
      // store user input in searchTerm state var
      // only show results if 2 or more characters are entered
      setSearchTerm(val);
      if (val.length <= 1) {
        if (open) setOpen(false); // TODO: ??
      } else if (!open) setOpen(true);
    };

    return (
      <section className={styles.container}>
        <div className={overlay ? styles.overlay : ""}></div>
        <Autocomplete
          open={open} // list of results below input box
          onChange={(e, value) => handleChange(e, value)}
          onInputChange={(_, value) => handleInputChange(_, value)}
          onKeyDown={(e) => handleKeyDown(e)}
          getOptionLabel={(option) => option.title}
          className={`${styles.autoComplete} ${
            overlay ? styles.pageWidth : ""
          }`}
          options={ACData}
          filterOptions={(options, { inputValue }) => {
            const query = inputValue.toLowerCase();
            return options.filter(
              (option) =>
                option.title.toLowerCase().includes(query) ||
                option.brand.toLowerCase().includes(query),
            );
          }}
          isOptionEqualToValue={(option, value) =>
            value === undefined || option.modelid === value.modelid
          }
          renderOption={(props, { title, modelid, image }, { inputValue }) => {
            const matches = match(title, inputValue);
            const parts = parse(title, matches);
            return (
              <li {...props} className={styles.listItem} key={modelid}>
                <div className={styles.itemCont}>
                  <div className={styles.itemImg}>
                    <Img
                      src={image}
                      alt={title}
                      w={50}
                      h={50}
                      l="eager"
                      p={false}
                    />
                  </div>
                  <div className={styles.itemLabel}>
                    {parts.map((part, index) => (
                      <span
                        style={{
                          fontWeight: part.highlight ? 700 : 400,
                        }}
                        key={index}
                      >
                        {part.text}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField
              label="Search"
              {...params}
              className={styles.tf}
              onClick={handleClick}
              onBlur={handleBlur}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#555", // or "none" to remove it entirely
                    borderWidth: "1px", // prevents the border from thickening on focus
                    color: "white",
                  },
                "& .MuiOutlinedInput-root": {
                  paddingRight: "10px !important", // Adjust padding here
                },
              }}
            />
          )}
        ></Autocomplete>
      </section>
    );
  }
  return null;
}
