SELECT docs.date, docTypes.name, docs.id, products.name, products.image, products.price, rows.quantity, products.removed
FROM docs, docTypes, rows, products
WHERE products.removed = 0 AND docs.removed = 0 AND rows.removed = 0 AND docTypes.removed = 0 AND docs.id = rows.docId AND
docs.typeId = docTypes.id AND products.id = rows.productId ORDER BY docs.date;