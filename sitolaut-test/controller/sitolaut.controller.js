import { insertSchedule } from "../helper/sitolaut_helper.js";

export const sendDataSitolaut = async (req, res) => {
  const payloadSchedule = req.body.schedule;
  
  try {
    const resultInsertSchedule = await insertSchedule(payloadSchedule);

    return res.json({
      code: "01",
      status: "success",
      data: resultInsertSchedule,
    });
  } catch (error) {
    console.log("error send data: ", error);
    return res.json(error);
  }
};
