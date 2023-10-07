import {useSelector} from "react-redux";

export function Board() {
    const size = useSelector((state) => state.board.size);
    
    console.log('MY_REG size: ', size);

    return (
        <table id='board'>

            <tr>
                <td data-pos='0'></td>
                <td data-pos='0-1' className='wallPlacementVert'></td>
                <td data-pos='1'></td>
                <td data-pos='1-2' className='wallPlacementVert'></td>
                <td data-pos='2'></td>
                <td data-pos='2-3' className='wallPlacementVert'></td>
                <td data-pos='3'></td>
                <td data-pos='3-4' className='wallPlacementVert'></td>
                <td data-pos='4'>
                    <div className='pieceComputer'></div>
                </td>
                <td data-pos='4-5' className='wallPlacementVert'></td>
                <td data-pos='5'></td>
                <td data-pos='5-6' className='wallPlacementVert'></td>
                <td data-pos='6'></td>
                <td data-pos='6-7' className='wallPlacementVert'></td>
                <td data-pos='7'></td>
                <td data-pos='7-8' className='wallPlacementVert'></td>
                <td data-pos='8'></td>
            </tr>
            <tr>
                <td data-pos='0-9' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='1-10' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='2-11' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='3-12' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='4-13' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='5-14' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='6-15' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='7-16' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='8-17' className='wallPlacementHoriz_NOHOVER'></td>
            </tr>

            <tr>
                <td data-pos='9'></td>
                <td data-pos='9-10' className='wallPlacementVert'></td>
                <td data-pos='10'></td>
                <td data-pos='10-11' className='wallPlacementVert'></td>
                <td data-pos='11'></td>
                <td data-pos='11-12' className='wallPlacementVert'></td>
                <td data-pos='12'></td>
                <td data-pos='12-13' className='wallPlacementVert'></td>
                <td data-pos='13'></td>
                <td data-pos='13-14' className='wallPlacementVert'></td>
                <td data-pos='14'></td>
                <td data-pos='14-15' className='wallPlacementVert'></td>
                <td data-pos='15'></td>
                <td data-pos='15-16' className='wallPlacementVert'></td>
                <td data-pos='16'></td>
                <td data-pos='16-17' className='wallPlacementVert'></td>
                <td data-pos='17'></td>
            </tr>
            <tr>
                <td data-pos='9-18' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='10-19' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='11-20' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='12-21' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='13-22' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='14-23' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='15-24' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='16-25' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='17-26' className='wallPlacementHoriz_NOHOVER'></td>
            </tr>

            <tr>
                <td data-pos='18'></td>
                <td data-pos='18-19' className='wallPlacementVert'></td>
                <td data-pos='19'></td>
                <td data-pos='19-20' className='wallPlacementVert'></td>
                <td data-pos='20'></td>
                <td data-pos='20-21' className='wallPlacementVert'></td>
                <td data-pos='21'></td>
                <td data-pos='21-22' className='wallPlacementVert'></td>
                <td data-pos='22'></td>
                <td data-pos='22-23' className='wallPlacementVert'></td>
                <td data-pos='23'></td>
                <td data-pos='23-24' className='wallPlacementVert'></td>
                <td data-pos='24'></td>
                <td data-pos='24-25' className='wallPlacementVert'></td>
                <td data-pos='25'></td>
                <td data-pos='25-26' className='wallPlacementVert'></td>
                <td data-pos='26'></td>
            </tr>
            <tr>
                <td data-pos='18-27' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='19-28' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='20-29' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='21-30' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='22-31' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='23-32' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='24-33' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='25-34' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='26-35' className='wallPlacementHoriz_NOHOVER'></td>
            </tr>

            <tr>
                <td data-pos='27'></td>
                <td data-pos='27-28' className='wallPlacementVert'></td>
                <td data-pos='28'></td>
                <td data-pos='28-29' className='wallPlacementVert'></td>
                <td data-pos='29'></td>
                <td data-pos='29-30' className='wallPlacementVert'></td>
                <td data-pos='30'></td>
                <td data-pos='30-31' className='wallPlacementVert'></td>
                <td data-pos='31'></td>
                <td data-pos='31-32' className='wallPlacementVert'></td>
                <td data-pos='32'></td>
                <td data-pos='32-33' className='wallPlacementVert'></td>
                <td data-pos='33'></td>
                <td data-pos='33-34' className='wallPlacementVert'></td>
                <td data-pos='34'></td>
                <td data-pos='34-35' className='wallPlacementVert'></td>
                <td data-pos='35'></td>
            </tr>
            <tr>
                <td data-pos='27-36' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='28-37' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='29-38' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='30-39' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='31-40' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='32-41' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='33-42' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='34-43' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='35-44' className='wallPlacementHoriz_NOHOVER'></td>
            </tr>

            <tr>
                <td data-pos='36'></td>
                <td data-pos='36-37' className='wallPlacementVert'></td>
                <td data-pos='37'></td>
                <td data-pos='37-38' className='wallPlacementVert'></td>
                <td data-pos='38'></td>
                <td data-pos='38-39' className='wallPlacementVert'></td>
                <td data-pos='39'></td>
                <td data-pos='39-40' className='wallPlacementVert'></td>
                <td data-pos='40'></td>
                <td data-pos='40-41' className='wallPlacementVert'></td>
                <td data-pos='41'></td>
                <td data-pos='41-42' className='wallPlacementVert'></td>
                <td data-pos='42'></td>
                <td data-pos='42-43' className='wallPlacementVert'></td>
                <td data-pos='43'></td>
                <td data-pos='43-44' className='wallPlacementVert'></td>
                <td data-pos='44'></td>
            </tr>
            <tr>
                <td data-pos='36-45' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='37-46' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='38-47' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='39-48' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='40-49' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='41-50' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='42-51' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='43-52' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='44-53' className='wallPlacementHoriz_NOHOVER'></td>
            </tr>

            <tr>
                <td data-pos='45'></td>
                <td data-pos='45-46' className='wallPlacementVert'></td>
                <td data-pos='46'></td>
                <td data-pos='46-47' className='wallPlacementVert'></td>
                <td data-pos='47'></td>
                <td data-pos='47-48' className='wallPlacementVert'></td>
                <td data-pos='48'></td>
                <td data-pos='48-49' className='wallPlacementVert'></td>
                <td data-pos='49'></td>
                <td data-pos='49-50' className='wallPlacementVert'></td>
                <td data-pos='50'></td>
                <td data-pos='50-51' className='wallPlacementVert'></td>
                <td data-pos='51'></td>
                <td data-pos='51-52' className='wallPlacementVert'></td>
                <td data-pos='52'></td>
                <td data-pos='52-53' className='wallPlacementVert'></td>
                <td data-pos='53'></td>
            </tr>
            <tr>
                <td data-pos='45-54' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='46-55' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='47-56' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='48-57' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='49-58' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='50-59' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='51-60' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='52-61' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='53-62' className='wallPlacementHoriz_NOHOVER'></td>
            </tr>

            <tr>
                <td data-pos='54'></td>
                <td data-pos='54-55' className='wallPlacementVert'></td>
                <td data-pos='55'></td>
                <td data-pos='55-56' className='wallPlacementVert'></td>
                <td data-pos='56'></td>
                <td data-pos='56-57' className='wallPlacementVert'></td>
                <td data-pos='57'></td>
                <td data-pos='57-58' className='wallPlacementVert'></td>
                <td data-pos='58'></td>
                <td data-pos='58-59' className='wallPlacementVert'></td>
                <td data-pos='59'></td>
                <td data-pos='59-60' className='wallPlacementVert'></td>
                <td data-pos='60'></td>
                <td data-pos='60-61' className='wallPlacementVert'></td>
                <td data-pos='61'></td>
                <td data-pos='61-62' className='wallPlacementVert'></td>
                <td data-pos='62'></td>
            </tr>
            <tr>
                <td data-pos='54-63' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='55-64' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='56-65' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='57-66' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='58-67' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='59-68' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='60-69' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='61-70' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='62-71' className='wallPlacementHoriz_NOHOVER'></td>
            </tr>

            <tr>
                <td data-pos='63'></td>
                <td data-pos='63-64' className='wallPlacementVert'></td>
                <td data-pos='64'></td>
                <td data-pos='64-65' className='wallPlacementVert'></td>
                <td data-pos='65'></td>
                <td data-pos='65-66' className='wallPlacementVert'></td>
                <td data-pos='66'></td>
                <td data-pos='66-67' className='wallPlacementVert'></td>
                <td data-pos='67'></td>
                <td data-pos='67-68' className='wallPlacementVert'></td>
                <td data-pos='68'></td>
                <td data-pos='68-69' className='wallPlacementVert'></td>
                <td data-pos='69'></td>
                <td data-pos='69-70' className='wallPlacementVert'></td>
                <td data-pos='70'></td>
                <td data-pos='70-71' className='wallPlacementVert'></td>
                <td data-pos='71'></td>
            </tr>
            <tr>
                <td data-pos='63-72' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='64-73' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='65-74' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='66-75' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='67-76' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='68-77' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='69-78' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='70-79' className='wallPlacementHoriz'></td>
                <td className='crossSpace'></td>
                <td data-pos='71-80' className='wallPlacementHoriz_NOHOVER'></td>
            </tr>
            
            <tr>
                <td data-pos='72'></td>
                <td data-pos='72-73' className='wallPlacementVert_NOHOVER'></td>
                <td data-pos='73'></td>
                <td data-pos='73-74' className='wallPlacementVert_NOHOVER'></td>
                <td data-pos='74'></td>
                <td data-pos='74-75' className='wallPlacementVert_NOHOVER'></td>
                <td data-pos='75'></td>
                <td data-pos='75-76' className='wallPlacementVert_NOHOVER'></td>
                <td data-pos='76'>
                    <div className='piecePlayer'></div>
                </td>
                <td data-pos='76-77' className='wallPlacementVert_NOHOVER'></td>
                <td data-pos='77'></td>
                <td data-pos='77-78' className='wallPlacementVert_NOHOVER'></td>
                <td data-pos='78'></td>
                <td data-pos='78-79' className='wallPlacementVert_NOHOVER'></td>
                <td data-pos='79'></td>
                <td data-pos='79-80' className='wallPlacementVert_NOHOVER'></td>
                <td data-pos='80'></td>
            </tr>
        </table>
    )
}