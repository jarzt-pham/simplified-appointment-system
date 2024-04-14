import { v4 as uuidv4 } from 'uuid';

export const generateUuid = (): string => {
        return uuidv4();
}

export const generateTime = (): string[] => {
        const result: string[] = [];
        const startTime = new Date();
        startTime.setHours(9, 0, 0, 0); 
      
        const endTime = new Date();
        endTime.setHours(18, 0, 0, 0);
      
        const interval = 30 * 60 * 1000;
      
        let currentTime = startTime.getTime();
        while (currentTime <= endTime.getTime()) {
          const currentDate = new Date(currentTime);
          const formattedTime = currentDate.toTimeString().slice(0, 5); 
          result.push(formattedTime);
          currentTime += interval;
        }
      
        return result;
      };
      
export const TimeArr = generateTime();
