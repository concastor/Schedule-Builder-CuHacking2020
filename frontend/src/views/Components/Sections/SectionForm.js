import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

function submit() {
    console.log(document.getElementById("course1").value);
}

export default function SectionBasics() {
    const classes = useStyles();
    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Course Input</h2>
                </div>
                <div id="inputs">
                    <GridContainer>
                        <GridItem xs={12} sm={4} md={2} lg={2}>
                            <CustomInput
                                id="course1"
                                inputProps={{
                                    placeholder: "Course"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={4} md={2} lg={2}>
                            <CustomInput
                                id="course2"
                                inputProps={{
                                    placeholder: "Course"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={4} md={2} lg={2}>
                            <CustomInput
                                id="course3"
                                inputProps={{
                                    placeholder: "Course"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={4} md={2} lg={2}>
                            <CustomInput
                                id="course4"
                                inputProps={{
                                    placeholder: "Course"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={4} md={2} lg={2}>
                            <CustomInput
                                id="course5"
                                inputProps={{
                                    placeholder: "Course"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={4} md={2} lg={2}>
                            <CustomInput
                                id="course6"
                                inputProps={{
                                    placeholder: "Course"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                    <Button
                        type="button"
                        color="primary"
                        id = "submit_button"
                        onClick={submit}>Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
