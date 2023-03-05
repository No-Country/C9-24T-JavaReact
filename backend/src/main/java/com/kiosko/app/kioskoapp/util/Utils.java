package com.kiosko.app.kioskoapp.util;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Utils {
    public static <T> List<T> getListOf(T... items){
        return Arrays.asList(items);
    }

    // Returns an array of strings with the name of properties with null values of an objects
    public static  String[] getNullPropertyNames  (Object source) {
        final BeanWrapper src = new BeanWrapperImpl(source) ;
        java.beans.PropertyDescriptor[] pds = src.getPropertyDescriptors() ;
        Set<String> emptyNames = new HashSet<String >() ;
        for (java.beans.PropertyDescriptor pd: pds) {
            Object srcValue = src.getPropertyValue(pd.getName()) ;
            if  (srcValue == null ) emptyNames.add(pd.getName()) ;
        }
        String[] result = new  String[emptyNames.size()] ;
        return  emptyNames.toArray(result) ;
    }

    // Copy the properties of a source object to a target object ignoring null properties
    public static void mergeObjects (Object src ,  Object target) {
        BeanUtils.copyProperties (src ,  target , getNullPropertyNames (src)) ;
    }





}
