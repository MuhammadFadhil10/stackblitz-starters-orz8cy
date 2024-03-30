// import { ScheduleModel } from "../model/sitolaut.model.js";

import database from "../database/database.js";

export const insertSchedule = async (payload) => {
  // console.log("payload: ", payload);
  const formattedPayload = {
    ...payload,
    pelabuhan_awal: payload.dari_pelabuhan,
    pelabuhan_akhir: payload.ke_pelabuhan,
  };

  delete formattedPayload.dari_pelabuhan;
  delete formattedPayload.ke_pelabuhan;

  const values = Object.entries(formattedPayload).map(([key, value]) => {
    console.log("value: ", value);
    return value;
  });

  // console.log("y: ", y);

  try {
    const insertResult = await database.query(
      `
      insert into sitolaut.schedule 
      (
        id
        tanggal_berangkat,
        is_manifest_temporary,
        tanggal_manifest,
        nama_kapal,
        dari_pelabuhan,
        ke_pelabuhan,
        kode,
        voyage,
        nama_perusahaan,
        logo_perusahaan,
        foto_ttd,
        nama_ttd,
        kota
      ) 
      values 
      (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
        $11, $12, $13, $14
      )
      
      `,
      values,
    );

    return insertResult;
  } catch (error) {
    throw new Error(error);
  }
};
