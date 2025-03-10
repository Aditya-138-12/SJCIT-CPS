import React from "react";
import { useState, useEffect } from "react";
import {
  Radio,
  RadioGroup,
  FormGroup,
  Card,
  CardHeader,
  FormControlLabel,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";

const IndustryAttachement = () => {
  const [industryAttachementChecked, setindustryAttachementChecked] =
    useState(false);

  const [NumberofIndustryAttachments, setNumberofIndustryAttachments] =
    useState();
  console.log(NumberofIndustryAttachments);

  const IndustryAttachementsOption = ["4 weeks", "8 weeks"];

  const [IndustryAttachementsNumber, setIndustryAttachementsNumber] = useState(
    []
  );

  useEffect(() => {
    if (NumberofIndustryAttachments) {
      const count = parseInt(NumberofIndustryAttachments, 10) || 0;
      setIndustryAttachementsNumber((prevList) => {
        const newList = [...prevList];
        if (newList.length < count) {
          newList.push(
            ...Array(count - newList.length).fill({
              industryAttachementsOption: "",
            })
          );
        } else {
          newList.length = count;
        }
        return newList;
      });
    }
  }, [NumberofIndustryAttachments]);

  const handleaIndustryAttachementChecked = (e) => {
    setindustryAttachementChecked(e.target.value);
  };

  const handleIndustryAttachementsSelect = (index, event) => {
    const newIndustryAttachementsNumber = [...IndustryAttachementsNumber];
    newIndustryAttachementsNumber[index] = {
      ...newIndustryAttachementsNumber[index],
      industryAttachementsOption: event.target.value,
    };
    setIndustryAttachementsNumber(newIndustryAttachementsNumber);
    //console.log(IndustryAttachementsNumber[index]);
  };

  return (
    <>
      <Card
        variant="elevation"
        elevation={5}
        sx={{
          width: "100%",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "20px",
        }}
        raised
      >
        <CardHeader
          title="Industry Attachment of 4 to 8 week duration."
          subheader="Select Options"
          sx={{ textAlign: "center" }}
        />

        <FormGroup
          row
          sx={{
            marginTop: "10px",
            marginBottom: "20px",
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography>
            Have you ever done Industry Attachment of 4 to 8 week duration.?
          </Typography>
          <RadioGroup
            row
            sx={{ gap: 2 }}
            value={industryAttachementChecked}
            onChange={(e) => handleaIndustryAttachementChecked(e)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormGroup>

        {industryAttachementChecked !== "No" && industryAttachementChecked && (
          <>
            <FormControl fullWidth>
              <TextField
                label="How many Industry Attachments have you done?"
                type="number"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  let value = parseInt(e.target.value, 10);
                  if (value <= 0) {
                    value = 0;
                  } else if (value) {
                  } else {
                    value = isNaN(value);
                  }
                  e.target.value = value;
                  setNumberofIndustryAttachments(e.target.value);
                }}
              />
            </FormControl>

            {industryAttachementChecked !== "No" &&
              IndustryAttachementsNumber.map((_, index) => (
                <FormControl fullWidth sx={{ marginTop: "20px" }}>
                  <Typography
                    variant="h5"
                    sx={{ marginBottom: "20px", textAlign: "center" }}
                  >
                    Information About Industry Attachment {index + 1}
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="t">
                      Select Duration of Industry Attachment {index + 1}{" "}
                      <span style={{ color: "red" }}>*</span>
                    </InputLabel>
                    <Select
                      labelId="t"
                      id="g"
                      label="Select Duration of Industry Attachment"
                      value={_.industryAttachementsOption}
                      onChange={(e) =>
                        handleIndustryAttachementsSelect(index, e)
                      }
                    >
                      {IndustryAttachementsOption.map((_, index) => (
                        <MenuItem key={index} value={_}>
                          {_}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </FormControl>
              ))}
          </>
        )}
      </Card>
    </>
  );
};

export default IndustryAttachement;
