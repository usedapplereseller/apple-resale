import { useState, FC, ChangeEvent } from "react";
import Header from "./common/Header";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MDBBtn } from "mdb-react-ui-kit";
import { resourceLimits } from "worker_threads";

const NewListingForm: FC = () => {
  const [productType, setProductType] = useState<string | null>(null);
  const [listingTitle, setListingTitle] = useState<string>("");
  const [condition, setCondition] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const [photos, setPhotos] = useState<FileList | null>(null);
  const [currentPhotos, setCurrentPhotos] = useState<Array<Object> | null>(
    null
  );

  const handleChange: any = (event: ChangeEvent<HTMLInputElement>) => {
    if ((event.target.name as string) === "productType") {
      setProductType(event.target.value);
    }

    if ((event.target.name as string) === "listingTitle") {
      setListingTitle(event.target.value);
    }

    if ((event.target.name as string) === "condition") {
      setCondition(event.target.value);
    }

    if ((event.target.name as string) === "price") {
      setPrice(event.target.value);
    }

    if ((event.target.name as string) === "description") {
      setDescription(event.target.value);
    }
  };

  const handleChangePhotos = (event: ChangeEvent<HTMLInputElement>) => {
    setPhotos(event.target.files);
    console.log(photos);

    // this does not work
    // const files = event.target.files;
    // let photosArr: Array<Object> = [];
    // for (let i = 0; i < files.length; i += 1) {
    //   photosArr.push(URL.createObjectURL(event.target.files[i]));
    // }
    // setCurrentPhotos(photosArr); // to display current photos selected
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column">
        <Box className="d-flex justify-content-evenly my-4">
          <h3 className="d-flex align-left">What are you listing today?</h3>
          <MDBBtn>List it</MDBBtn>
        </Box>

        <div className="d-flex justify-content-center">
          <Box sx={{ width: 450 }}>
            <h4 className="d-flex text-align-left">Upload photos</h4>
            <div>
              <input type="file" multiple onChange={handleChangePhotos} />
              <img src="" />
            </div>
          </Box>
          <Box sx={{ width: 450 }} className="d-flex flex-column">
            <h4 className="d-flex text-align-left">About the item</h4>
            <FormControl fullWidth className="mt-2">
              <InputLabel id="demo-simple-select-label">Product</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productType}
                label="Product"
                name="productType"
                onChange={handleChange}
              >
                <MenuItem value={1}>Mac</MenuItem>
                <MenuItem value={2}>iPad</MenuItem>
                <MenuItem value={3}>iPhone</MenuItem>
                <MenuItem value={4}>Watch</MenuItem>
                <MenuItem value={5}>Airpods</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Listing Title"
              variant="outlined"
              className="mt-3 align-text-start"
              name="listingTitle"
              onChange={handleChange}
            />

            <FormControl className="mt-3">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                className="align-left"
              >
                <h5 className="d-flex text-align-left">Condition </h5>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="condition"
                onChange={handleChange}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Brand new"
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Like new"
                />
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="Lightly used"
                />
                <FormControlLabel
                  value={4}
                  control={<Radio />}
                  label="Well used"
                />
                <FormControlLabel
                  value={5}
                  control={<Radio />}
                  label="Heavily used"
                />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth className="mt-3">
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={price}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                name="price"
              />
            </FormControl>
            <h5 className="mt-3 d-flex text-align-left">Description</h5>
            <TextField
              className="mt-1"
              id="outlined-basic"
              variant="outlined"
              multiline={true}
              rows={5}
              name="description"
              onChange={handleChange}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default NewListingForm;
