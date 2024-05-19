import React from "react";
import MenuItem from "bsr-menu";
import CodeSnippetJavaScript from "../codeSnippetJavaScript";
import CodeSnippetJava from "../codeSnippetJavaDotNet";

const code = `
import React from "react";
import MenuItem from "bsr-menu";


const App = () => {
  return (
      <MenuItem content={"Simple menu"} behavior={'click'}>
                <MenuItem content={'level 1'} positionPopup={'downRight'}>
                    <MenuItem content={'level 2'}/>
                    <MenuItem content={'level 2'}/>
                </MenuItem>
                <MenuItem content={'level 1'} positionPopup={'downRight'}>
                    <MenuItem content={'level 2'}/>
                    <MenuItem content={'level 2'}/>
                </MenuItem>
      </MenuItem>
  );
};
`;
const css=`

public class MErrorKm {
    public static final String TABLE_NAME="error_km";

    @PrimaryKey("id")
    public int id;

    @Column("date")
    public long date;

    @Column("response")
    public String response;

    @Column("request")
    public String request;

    @Column("status")
    public int status;
    @Column("url")
    public String url;
}
`
export function P1_2() {
    return (

        <>
            <MenuItem content={"Simple menu"} behavior={'click'}>
                <MenuItem content={'level 1'} positionPopup={'downRight'}>
                    <MenuItem content={'level 2'}/>
                    <MenuItem content={'level 2'}/>
                </MenuItem>
                <MenuItem content={'level 1'} positionPopup={'downRight'}>
                    <MenuItem content={'level 2'}/>
                    <MenuItem content={'level 2'}/>
                </MenuItem>
            </MenuItem>
            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
            <div>
                <CodeSnippetJava code={css}/>
            </div>
        </>
    )
}