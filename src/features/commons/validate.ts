import moment from 'moment';
import { z } from 'zod';

export namespace ValidateCommon {

  export const validateList = ({ date }: { date: string }): { date: string } => {
    const ValidateInputSchema = z.object({
      date: z
        .string({
          invalid_type_error: 'Date must be a date with format YYYY-MM-DD',
        })
        .optional(),
    });
  
    try {
      if (!date) {
        return { date: moment((new Date()).toString()).format('YYYY-MM-DD') };
      } else ValidateInputSchema.parse({ date });

      return { date: date };
    } catch (error) {
      throw new Error(error);
    }
  };

  export const validateCreate = (payload: { date: Date, time: string, duration: number, scheduling: Date})=> {
    console.log({payload})

    
    const ValidateInputSchema = z.object({
      date: z
        .date({
          invalid_type_error: 'Date must be a date with format YYYY-MM-DD',
        }),
      time: z.string({
        invalid_type_error: 'Time must be a string with format HH:mm',
        required_error: 'Time is required',
      }),
      duration: z.number({
        invalid_type_error: 'Duration must be a number',
        required_error: 'Duration is required',
      }),
      scheduling: z.date({
        invalid_type_error: 'Scheduling must be a Date with format YYYY-MM-DD HH:mm:ss',
        required_error: 'Scheduling is required',
      }),
    });
    
    
    try {
      // ValidateInputSchema.parse(payload);

      return payload;
    } catch (error) {
      throw new Error(error);
    }
  };
}
